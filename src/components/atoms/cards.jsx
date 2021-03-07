import { CardDiv } from "../../style/index.js";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { thunkSitesList } from "../../store/thunk.js";
import Button from "./Button.jsx";

const Cards = ({ title, description, tags, link, id }) => {
  const dispatch = useDispatch();
  const [removeDialog, setRemoveDialog] = useState(false);
  const [idToRemove, setId] = useState(0);
  const [name, setName] = useState("");

  const handleOpen = () => {
    setRemoveDialog(true);
  };

  const handleClose = () => {
    setRemoveDialog(false);
  };

  const removeTool = (id) => {
    axios
      .delete(`http://localhost:3000/tools/${id}`)
      .then(() => {
        dispatch(thunkSitesList());
        handleClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <CardDiv>
      <div>
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </p>
        <Button
          state={() => {
            handleOpen();
            setId(id);
            setName(title);
          }}
          type="danger"
          text={
            <>
              <span>X</span> remove
            </>
          }
        ></Button>
      </div>
      <div>
        <p>{description}</p>
        <div>
          {tags.map((item, idx) => {
            return <b key={idx}>#{item} </b>;
          })}
        </div>
      </div>
      <Dialog
        open={removeDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"X remove tool?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove {name}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="neutral" text="cancel" state={handleClose} />

          <Button
            type="danger"
            text="delete"
            state={() => removeTool(idToRemove)}
          />
        </DialogActions>
      </Dialog>
    </CardDiv>
  );
};

export default Cards;
