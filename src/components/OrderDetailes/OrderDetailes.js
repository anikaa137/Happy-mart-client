import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
}));
const OrderDetailes = ({ pProduct }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} class="mt-5">
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img
                                className={classes.img}
                                alt="complex"
                                src={pProduct.image}
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Product Name: {pProduct.ProductName}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {pProduct.width}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    Quantity: {pProduct.Quantity}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    style={{ cursor: "pointer" }}
                                >
                                    Placed by: {pProduct.shopper}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ cursor: "pointer" }}
                                >
                                    email:{pProduct.email}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ cursor: "pointer" }}
                                >
                                    Placed on : {pProduct.orderTime}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ cursor: "pointer" }}
                                >
                                    Placed Method : Home Delivery
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                {pProduct.price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default OrderDetailes;
