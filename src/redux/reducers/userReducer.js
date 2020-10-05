const initialState = {
  userList: [
    {
      id: "1",
      name: "Nguyễn Phong Hào",
      username: "hao123456",
      email: "Hao@baybay.com",
      phoneNumber: "0599325566",
      type: "USER",
    },
    {
      id: "2",
      name: "Lê Phong Dinh",
      username: "dinh56789",
      email: "dinh@gmail.com",
      phoneNumber: "0288350099",
      type: "VIP",
    },
  ],
  keyWord: "",
  userEdit: null,
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SET_USER_LIST": {
      return { ...state, userList: [...actions.payload] };
    }
    case "DELETE_USER": {
      return {
        ...state,
        userList: state.userList.filter(
          (item) => item.id !== actions.payload.id
        ),
      };
    }
    case "SAVE_USER": {
      if (actions.payload.id) {
        //   update
        const index = state.userList.findIndex(
          (item) => item.id === actions.payload.id
        );
        if (index !== -1) {
          state.userList[index] = actions.payload;
        }
        return { ...state, userList: [...state.userList] };
      } else {
        //   create
        return {
          ...state,
          userList: [
            ...state.userList,
            { ...actions.payload, id: Math.random() },
          ],
        };
      }
    }
    case "CHANGE_KEY_WORD": {
      return { ...state, keyWord: actions.payload };
    }
    case "RESET_USER_EDIT": {
      return { ...state, userEdit: null };
    }

    case "EDIT_USER": {
      return { ...state, userEdit: { ...actions.payload } };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
