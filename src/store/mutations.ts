export default {
  updateAccount(state:any ,newAccount:account) {
    state.account = newAccount;
  },
  updateFormAccount(state:any, hash:any) {
    const key = hash.key;
    const val = hash.val;
    state.account[key] = val;
  },
  updateLogin(state:any ,newLogin:user) {
    state.login = newLogin;
  },
  updateStory(state:any ,newStory:story) {
    state.story = newStory;
  },
  updatePost(state:any ,newPost:post) {
    state.post = newPost;
  },
  memoryForm(state:any, fromData:any) {
    state.formData = fromData;
  },
  initErrorAndFlag(
    state:any ,initErrorAndFlag:any) {
    console.log(initErrorAndFlag)
    state.error = initErrorAndFlag.error;
    state.flagValidate = initErrorAndFlag.flagValidate;
  },
  updateErrorMsg(state:any ,hash:any) {
    const key = hash.key;
    const val = hash.val;
    state.error[key] = val;
    if (val === '') {
      state.flagValidate[key] = true;
    } else {
      state.flagValidate[key] = false;
    }
  }
};