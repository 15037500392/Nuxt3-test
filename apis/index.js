// 获取首页数据
export function useIndexDataApi() {
    return useHttpGet('IndexData', '/pc/index', {
        lazy:true
    })
}

// 获取拼团数据
export function usePinTeamApi(query) {
   let q = useQueryToString(query)
    return useHttpGet('pinData', `/pc/group/list${q}`, {
        lazy:true
    })
}