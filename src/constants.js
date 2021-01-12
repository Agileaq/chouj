//版本号
export const VERSION_NUMBER = process.env.GIT_COMMIT;
console.warn(`当前代码Git Commit ID: ${process.env.GIT_COMMIT}`);
// 所有参与抽奖人员
export const ALL_USERS_ORIGINAL = window.ALL_USERS;
console.warn('奖池人员名单\n', window.ALL_USERS);
// 默认抽奖流程
export const PRESET_AWARD = window.PRESET_AWARD;

// 数据存储在LocalStorage中的Key
export const STORAGE_RANDOM_KEY = {
    // 抽奖开始与结束开关
    RANDOM_FLAG: 'Hubenlv-Award-Random-2017',
    // 客户端【观众】随机出的获奖人员
    RANDOM_LIST_CHANNEL: 'Hubenlv-Award-RandomList-2017',
    // 所有奖项获奖情况及日志
    AWARD_STATUS: 'Hubenlv-Award-2017',
    VERSION: 'Hubenlv-Award-2017-CodeVersion',
    CONNECTION_SIGN: 'Hubenlv-Award-2017-ConnectionSign'
}

// 检测客户端与客户端信号
export const CONNECTION_SIGN = {
    REQUEST: 'isReady',
    RESPONSE: 'readyNow',
    TIMEOUT: 1000
}

// 抽奖开始与结束开关Value
export const RANDOM_FLAG = {
    START: 'START',
    END: 'END'
}
// 奖项状态
export const AWARD_STATUS = {
    // 未抽奖
    NOT_START: 'NOT_START',
    // 准备抽奖, 显示奖项名称和开始抽奖按钮
    READY: 'READY',
    // 正在随机获奖名单中
    RANDOM: 'RANDOM',
    // 当前批次抽取完成(奖项数量比较多，需要分批进行)
    PAUSE: 'PAUSE',
    // 抽奖结束
    END: 'END'
}

// 随机效果相关参数
export const RANDOM_DURATION = 60;

// 每批次抽奖人员数量上限
export const RANDOM_MAX_SIZE = 10;
// 屏幕一行显示多少人员
export const MAX_COL_SIZE = 5;
export const NO_EMP_ID_KEY = '---';
export const CSV_NAME = '中奖名单.csv';
