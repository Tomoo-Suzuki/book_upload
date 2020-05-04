import request from "../../lib/request";

export const selectAccountU = (email, dispatch) => {

  const query = `{
    selectAccountU(email:"` + email + `") {
        id,
        last_name,
        first_name,
        last_name_kana,
        first_name_kana,
        gender,
        email,
        email_confirm,
        birthday,
    }
  }`;
  return request(query, 'selectAccountU').then(
    (res) => {
      console.log(res)
      dispatch(res)
    }
  );
};