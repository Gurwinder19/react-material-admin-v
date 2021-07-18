import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        height: '100%',
        background:theme.palette.glass.main,
        padding:theme.spacing(3),
        borderRadius:20,
    },
    titleWrapper: {
        color: theme.palette.fontColor.main,
        display:'flex',
        justifyContent:'space-between',
        marginBottom:theme.spacing(3),
    },

    mainTitle: {
        fontWeight: 600,
    },

    monthlyProject:{
        marginTop: theme.spacing(3),
        textAlign: 'center',
    },
    moreButton:{
        padding: 0,
    },



}));
export default useStyles;

