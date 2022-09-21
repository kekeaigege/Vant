import request from "../util/http"
export const getArticlesApi = function(page,limit){
    return request.get('/articles',{params:{_page:page,_limit:limit}})
}