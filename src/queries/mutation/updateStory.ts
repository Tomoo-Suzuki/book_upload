// import formDataToHash from "@/lib/formDataToHash";
import request from "@/lib/request";

export const updateStory = (hash, dispatch) => {
  // const hash = formDataToHash(form);
  console.log(JSON.stringify(hash));
  const query =
    `mutation{
          updateStory(id_story:"` +
    hash.id_story +
    `",
            title_main:"` +
    hash.title_main +
    `",
            auther_name:"` +
    hash.auther_name +
    `",
            is_complete:` +
    Boolean(hash.is_complete) +
    `,
            genre:` +
    Number(hash.genre) +
    `,
            catch_copy:"` +
    hash.catch_copy +
    `",
            synopsis:"` +
    hash.synopsis +
    `",
            keywords:"` +
    hash.keywords +
    `",
            extreme_depiction:"` +
    hash.extreme_depiction +
    `",
            color_type:` +
    Number(hash.color_type) +
    `,
            accept_advertisement:` +
    Boolean(hash.accept_advertisement) +
    `,
            accept_rating:` +
    Boolean(hash.accept_rating) +
    `,
            accept_reviews:` +
    Boolean(hash.accept_reviews) +
    `,
            accept_impression:` +
    Boolean(hash.accept_impression) +
    `,
            publish_evaluation:` +
    Boolean(hash.publish_evaluation) +
    `,
            accept_typo_reports:` +
    Boolean(hash.accept_typo_reports) +
    `
          ){
            id_story,
            title_main,
            auther_name,
            is_complete,
            genre,
            catch_copy,
            synopsis,
            keywords,
            extreme_depiction,
            color_type,
            accept_advertisement,
            accept_rating,
            accept_reviews,
            accept_impression,
            publish_evaluation,
            accept_typo_reports
          }
        }`;
  return request(query, "updateStory").then(res => {
    dispatch(res);
  });
};
