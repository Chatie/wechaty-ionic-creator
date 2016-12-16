angular.module('botie', [])

.service('BotieSvc', [function(){

    const botieList = [
        {
            id: 1,
            nick: 'lizhuohuan',
            createTime: '4132412343241',
            memo: 'zixia memo',
            status: 0,
            hostieId: 1,
            eventList: [
                {
                    type: 'scan',
                    time: '10:01',
                    data: 'fasdfas'
                },
                {
                    type: 'login',
                    time: '10:01',
                    data: 'fasdfas'
                },
                {
                    type: 'message',
                    time: '10:01',
                    data: 'fasdfas'
                },
                {
                    type: 'logout',
                    time: '10:01',
                    data: 'fasdfas'
                },
                {
                    type: 'error',
                    time: '10:01',
                    data: 'fasdfas'
                },
                
            ]
        },
        {
            id: 2,
            nick: 'I am hostie',
            createTime: '41324123432141',
            memo: 'token memo',
            status: 1,
            hostieId: 2,
            eventList: [
                {
                    type: 'error',
                    time: '10:01',
                    data: 'fasdfas',
                },
                {
                    type: 'scan',
                    time: '10:02',
                    data: 'lala',
                },
            ]
        }
    ]

    return {
        botieList: botieList,
                
        add: add,
        del: del,
        edit: edit,
        list: list,
    }
    
    function nextId() {
        let maxId = 1
        botieList.forEach(botie => {
            if (botie.id > maxId) {
                maxId = botie.id
            }
        })
        return maxId + 1
    }
    
    function add(newBotie) {
        Object.assign(newBotie, {
            id: nextId(),
            createTime: Date.now(),
            eventList: [],
            
        })
        console.log(newBotie)

        botieList.push(newBotie)
    }
    
    function del(delBotie) {
        console.log(delBotie)
        const index = botieList.indexOf(delBotie)
        if (index > -1) {
            botieList.splice(index, 1)
            return true
        }
        return false
        
        // const numBefore = botieList.length
        // botieList = botieList.filter(c => c.id == delBotie.id)
        // const numAfter = botieList.length
        // return numBefore - numAfter
    }
    
    function edit(editBotie) {
        console.log(botie)
        const result = botieList.filter(c => c.id == editChattie.id)
        if (result.length > 0) {
            Object.assign(botieList[result[0].id], editBotie)
            return true
        }
        return false
    }
    
    function list(id) {
        console.log('BotieSvc() list(' + id + ')')
        console.log(botieList)
        if (id) {
            result = botieList.filter(c => c.id == id)
            if (result.length > 0) {
                return result[0]
            }
            return null
        }
        
       return botieList
    }
    
}]);
