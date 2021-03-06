export default {
    toggleSys: false, // 标识切换系统
    tipSplit: false, // 分屏按钮显示
    cancelSendD: -1, // 标识当前发送的分屏模式ID, 防止连续发送同一个
    firstSendIns: true, // 首次选择系统
    list: [], // 保存列表信息
    lastPath: '',
    action: null, 
    user: { // 保存用户信息
        id: null,
        userName: '',
        userIconUrl: ''
    },
    screen: {
        screenId: '', // 分屏模式
        windows: [], // 窗口信息 {position: 位置, sysId: 系统id, wIndex: }
        sysId: '' // 选中的系统Id
    },
    planData: null , // 标识是否选择预案
    position: null, // 当前选中的小窗口的位置
    sysId: null, // 当前选择要展示在分屏小窗口的系统ID
    cur_sys: { // 不同分屏模式以及对应窗口的展示数据

        // 存在问题, 当切换screen_id时, 如果之前的子属性跟现在的存在重名的话
        // 那么就会显示一样的, 比如screen1x2和screen1x3都有screen-right
        // 在screen1x2选择screen-right之后, 切换到screen1x3, 其底下的screen-right
        // 值与screen1x2的screen-righ一样
        ['fullScreen']: {
            ['screen-center']: {
                name: '',
                id: -1,
                wIndex: 0
            }
        },
        ['screen1x2']: {
            ['screen-left']: {
                name: '',
                id: -1,
                wIndex: 0
            },
            ['screen-right']: {
                name: '',
                id: -1,
                wIndex: 1
            }
        },
        ['screen1x3']: {
            ['screen-left']: {
                name: '',
                id: -1,
                wIndex: 0
            },
            ['screen-center']: {
                name: '',
                id: -1,
                wIndex: 1
            },
            ['screen-right']: {
                name: '',
                id: -1,
                wIndex: 2
            }
        },
        ['screen2x2']: {
            ['screen-top-left']: {
                name: '',
                id: -1,
                wIndex: 0
            },
            ['screen-top-right']: {
                name: '',
                id: -1,
                wIndex: 1
            },
            ['screen-bottom-left']: {
                name: '',
                id: -1,
                wIndex: 2
            },
            ['screen-bottom-right']: {
                name: '',
                id: -1,
                wIndex: 3
            }
        },
        ['screen2x3']: {
            ['screen-top-left']: {
                name: '',
                id: -1,
                wIndex: 0
            },
            ['screen-top-center']: {
                name: '',
                id: -1,
                wIndex: 1
            },
            ['screen-top-right']: {
                name: '',
                id: -1,
                wIndex: 2
            },
            ['screen-bottom-left']: {
                name: '',
                id: -1,
                wIndex: 3
            },
            ['screen-bottom-center']: {
                name: '',
                id: -1,
                wIndex: 4
            },
            ['screen-bottom-right']: {
                name: '',
                id: -1,
                wIndex: 5
            }
        },
        ['screen3x3']: {
            ['screen-top-left']: {
                name: '',
                id: -1,
                wIndex: 0
            },
            ['screen-top-center']: {
                name: '',
                id: -1,
                wIndex: 1
            },
            ['screen-top-right']: {
                name: '',
                id: -1,
                wIndex: 2
            },
            ['screen-center-left']: {
                name: '',
                id: -1,
                wIndex: 3
            },
            ['screen-center-center']: {
                name: '',
                id: -1,
                wIndex: 4
            },
            ['screen-center-right']: {
                name: '',
                id: -1,
                wIndex: 5
            },
            ['screen-bottom-left']: {
                name: '',
                id: -1,
                wIndex: 6
            },
            ['screen-bottom-center']: {
                name: '',
                id: -1,
                wIndex: 7
            },
            ['screen-bottom-right']: {
                name: '',
                id: -1,
                wIndex: 8
            }
        },
        ['screen4x4']: {
            ['one-one']: {
                name: '',
                id: -1,
                wIndex: 0
            },
            ['one-two']: {
                name: '',
                id: -1,
                wIndex: 1
            },
            ['one-three']: {
                name: '',
                id: -1,
                wIndex: 2
            },
            ['one-four']: {
                name: '',
                id: -1,
                wIndex: 3
            },
            ['two-one']: {
                name: '',
                id: -1,
                wIndex: 4
            },
            ['two-two']: {
                name: '',
                id: -1,
                wIndex: 5
            },
            ['two-three']: {
                name: '',
                id: -1,
                wIndex: 6
            },
            ['two-four']: {
                name: '',
                id: -1,
                wIndex: 7
            },
            ['three-one']: {
                name: '',
                id: -1,
                wIndex: 8
            },
            ['three-two']: {
                name: '',
                id: -1,
                wIndex: 9
            },
            ['three-three']: {
                name: '',
                id: -1,
                wIndex: 10
            },
            ['three-four']: {
                name: '',
                id: -1,
                wIndex: 11
            },
            ['four-one']: {
                name: '',
                id: -1,
                wIndex: 12
            },
            ['four-two']: {
                name: '',
                id: -1,
                wIndex: 13
            },
            ['four-three']: {
                name: '',
                id: -1,
                wIndex: 14
            },
            ['four-four']: {
                name: '',
                id: -1,
                wIndex: 15
            }
        },
        ['diy']: {
            ['screen-left']: {
                name: '',
                id: -1,
                wIndex: 0
            },
            ['screen-right']: {
                name: '',
                id: -1,
                wIndex: 1
            }
        }
    }
}