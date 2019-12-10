const log = require("../../../core/logger");
exports.getEfficiency = async (req) => {
    log.info("getEfficiency");
    try {
        const data = [
            {
                month: 'Jan',
                item: '平均对应时长',
                time: 7
            },
            {
                month: 'Feb',
                item: '平均对应时长',
                time: 6.9
            },
            {
                month: 'Mar',
                item: '平均对应时长',
                time: 9.5
            },
            {
                month: 'Apr',
                item: '平均对应时长',
                time: 14.5
            },
            {
                month: 'May',
                item: '平均对应时长',
                time: 18.4
            },
            {
                month: 'Jun',
                item: '平均对应时长',
                time: 21.5
            },
            {
                month: 'Jul',
                item: '平均对应时长',
                time: 25.2
            },
            {
                month: 'Aug',
                item: '平均对应时长',
                time: 26.5
            },
            {
                month: 'Sep',
                item: '平均对应时长',
                time: 23.3
            },
            {
                month: 'Oct',
                item: '平均对应时长',
                time: 18.3
            },
            {
                month: 'Nov',
                item: '平均对应时长',
                time: 13.9
            },
            {
                month: 'Dec',
                item: '平均对应时长',
                time: 9.6
            }
        ];
        res = data;
        return (res);
    }
    catch (err) {
        log.info("getEfficiency err")
        log.err(err)
        throw err
    }
}