export const redColor = "#ff3979";
export const gradientBg = "radial-gradient(circle at 0 36%, #eb479e, #ff7387)";

export const ModalStyle = {
  overlay:{
    zIndex           : '999'
  },
  content : {
    top              : '50%',
    left             : '50%',
    right            : 'auto',
    bottom           : 'auto',
    marginRight      : '-50%',
    transform        : 'translate(-50%, -50%)',
    padding          : '0'
  }
}

//모달형식 댓글 창
export const ReplyStyle = {
  overlay : {
    backgroundColor  :"transparent",
    zIndex           :15
  },
  content : {
    width            :'100%',
    height           :'110px',
    top              :'none',
    left             :'50%',
    bottom           :'0',
    padding          :'0',
    transform        :'translateX(-50%)',
    backgroundColor  :"#e9e9e9",
    textAlign        :'center'
  }
}
