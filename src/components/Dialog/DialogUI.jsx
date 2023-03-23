import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Link } from 'react-router-dom'


const DialogUI = ({open, handleClose}) => {

    return (
        <>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                    
                <DialogTitle id="alert-dialog-title">{"CC Store"}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Gracias por tu compra! Agradecemos tu apoyo y esperamos que disfrutes mucho tu nueva adquisición.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    {/* <Button onClick={handleClose}>Disagree</Button> */}

                    <Link to={"/catalogue"} style = {{textDecoration: 'none'}}>
                        <Button onClick={handleClose} autoFocus>
                            Catálogo
                        </Button>
                    </Link>
                </DialogActions>
                
            </Dialog>

        </>

    );
}

export default DialogUI