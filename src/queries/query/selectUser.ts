export const selectUser = `query{
  selectUser(id:"00001") {
    id,
    password,
    user_type,
    magazine,
    agree_to_terms,
    date_reception
  }
}`
