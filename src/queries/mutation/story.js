const story = `mutation{
  addStory( id:"00004",
  id_story:"f00004",
  title_main:"槍の権左",
  auther_name:"芝楽二郎",
  is_complete:true,
  genre:3,
  catch_copy:"小次郎外伝",
  synopsis:"待望の新作",
  keywords:"歴史、ベストセラー",
  extreme_depiction:"2",
  color_type:1,
  accept_advertisement:false,
  accept_rating:true,
  accept_reviews:false,
  accept_impression:false,
  publish_evaluation:true,
  accept_typo_reports:true){
     id,
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
}`