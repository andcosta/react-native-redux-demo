const INITIAL_STATE = {
  idUser: '',
  tokenUser: '',
  nameUser: '',
  lastnameUser: '',
  emailUser: '',
  documentUser: '',
  phoneUser: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'updateIdUser':
      return { ...state, idUser: action.payload };
    case 'updateTokenUser':
      return { ...state, tokenUser: action.payload };
    case 'updateNameUser':
      return { ...state, nameUser: action.payload };
    case 'updateLastnameUser':
      return { ...state, lastnameUser: action.payload };
    case 'updateEmailUser':
      return { ...state, emailUser: action.payload };
    case 'updateDocumentUser':
      return { ...state, documentUser: action.payload };
    case 'updatePhoneUser':
      return { ...state, phoneUser: action.payload };
    default:
      return state;
  }
};
