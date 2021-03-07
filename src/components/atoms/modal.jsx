import Modal from "@material-ui/core/Modal";
import { ModalSection } from "../../style";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/actions";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { thunkSitesList } from "../../store/thunk";

const AddNewTool = () => {
  const dispatch = useDispatch();
  let state = useSelector((state) => state.modalState);

  const handleClose = () => {
    dispatch(closeModal(false));
  };

  const handleForm = (data) => {
    data.tags = data.tags.split(" ");
    console.log(data);
    try {
      axios.post("http://localhost:3000/tools", data).then((res) => {
        dispatch(thunkSitesList());
        handleClose();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      open={state}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ModalSection>
        <h2>+ Add new tool</h2>
        <Formik
          initialValues={{
            title: "",
            description: "",
            link: "",
            tags: "",
          }}
          onSubmit={(values) => {
            handleForm(values);
          }}
        >
          <Form>
            <div>
              <label htmlFor="title">Tool Name</label>
              <Field name="title" id="title" type="text" />
            </div>
            <div>
              <label htmlFor="link">Tool Link</label>
              <Field name="link" id="link" type="text" />
            </div>
            <div>
              <label htmlFor="description">Tool description</label>
              <Field name="description" id="description" cols="8" rows="4" />
            </div>
            <div>
              <label htmlFor="tags">Tags</label>
              <Field name="tags" id="tags" type="text" />
            </div>
            <div>
              <Button text="Add tool" type="sucess" />
            </div>
          </Form>
        </Formik>
      </ModalSection>
    </Modal>
  );
};

export default AddNewTool;
