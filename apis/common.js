// 获取搜索数据
export function useSearchListApi(query) {
    return useHttpGet('searchData', () => {
        let q = useQueryToString(query())
         return  `/pc/search${q}`
     }, {
         lazy:true
     })
 }