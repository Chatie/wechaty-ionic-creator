angular.module('chatie', [])

.service('ChatieSvc', [function(){

    const chatieList = [
        {
            id: 1,
            token: '111',
            nick: 'lizhuohuan',
            createTime: '4132412343241',
            memo: 'zixia memo',
            status: 0,
            version: '0.7.1',
            runtime: 'win32'
        },
        {
            id: 2,
            token: '222',
            nick: 'I am hostie',
            createTime: '1479609614286',
            memo: 'token memo',
            status: 1,
            version: '0.7.0',
            runtime: 'docker'
        }
    ]

    return {
        chatieList: chatieList,
        
        add: add,
        del: del,
        edit: edit,
        list: list
    }
    
    function add(hostie) {
        let maxId = 1
        chatieList.forEach(hostie => {
            if (hostie.id > maxId) {
                maxId = hostie.id
            }
        })
        hostie.id = maxId + 1
        
        console.log(hostie)
        chatieList.push(hostie)
        console.log(chatieList)
    }
    
    function del(id) {
        const lenBefore = chatieList.length
        chatieList = chatieList.filter(hostie => hostie.id !== id)
        const lenAfter = chatieList.length
        
        return lenAfter < lenBefore
    }
    
    function edit(hostie) {
        if (del(hostie.id)) {
            add(hostie)
            return true
        }
        return false
    }
    
    function list(id) {
        console.log(chatieList)
        
        if (typeof id !== 'undefined') {
            const result = chatieList.filter(hostie => hostie.id == id)
            if (result.length) {
                return result[0]
            }
            return null
        }
       return chatieList
    }
}]);
