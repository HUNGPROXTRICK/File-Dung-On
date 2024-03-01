module.exports.config = {
	name: "masoi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "UwU",
	description: "Game ma sói",
	commandCategory: "Game",
	usages: "[start/join/list/leave/test]",
	cooldowns: 1
};

module.exports.handleEvent = async ({ event, api, Users }) => {
        const { senderID, threadID, body, messageID } = event;

        	if (!global.moduleData.masoi) global.moduleData.masoi = new Map();
        	if (!global.moduleData.masoi.has(threadID)) return;
        	var values = global.moduleData.masoi.get(threadID);
        	if (values.start != 1) return;

        	if (body.indexOf("sói") == 0 || body.indexOf("Sói") == 0) {
        		if (values.sosoi > 0) return api.sendMessage("𝗦𝗼̂́ 𝘀𝗼́𝗶 𝗱𝗮̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗰𝗵𝗼̣𝗻, 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗰𝗵𝗼̣𝗻 𝗹𝗮̣𝗶", threadID);
        		if (body.slice(-1) > 5 /*&& body.slice(-1) < 2*/) return api.sendMessage("𝗦𝗼̂́ 𝘀𝗼́𝗶 𝗰𝗵𝗼̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗱𝘂̛𝗼̛̣𝗰 𝗶́𝘁 𝗵𝗼̛𝗻 𝟮 𝘃𝗮̀ 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝟱!", threadID);
        		if (values.sosoi == 0 && !isNaN(body.slice(-1))) {
        		    values.sosoi = (body.slice(-1));
        		    return api.sendMessage(`Đ𝗮̃ 𝗱𝗮̣̆𝘁 𝘀𝗼̂́ 𝘀𝗼́𝗶 𝘁𝗵𝗮̀𝗻𝗵: ${body.slice(-1)}`, threadID);
        		}
        	}

        	if (body.indexOf("Phanvai") == 0 || body.indexOf("Phân vai") == 0 || body.indexOf("phân vai") == 0) {
        	    var vaitro = [{
        	        id: 1,
        	        ten: "𝗕𝗮́𝗰 𝗦𝗶̃",
        	        gioithieu: "𝗖𝗵𝗼̣𝗻 𝗺𝗼̣̂𝘁 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗱𝗲̂̉ 𝗰𝗵𝗲 𝗰𝗵𝗼̛̉ 𝘃𝗮̀𝗼 𝗺𝗼̂̃𝗶 𝗱𝗲̂𝗺, 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗱𝗼́ 𝘀𝗲̃ 𝗸𝗵𝗼̂𝗻𝗴 𝗯𝗶̣ 𝗴𝗶𝗲̂́𝘁 𝗻𝗲̂́𝘂 𝗯𝗶̣ 𝘀𝗼́𝗶 𝘃𝗼𝘁𝗲 𝘁𝗿𝘂́𝗻𝗴.",
        	        Phe: "𝗗𝗮̂𝗻 𝗟𝗮̀𝗻𝗴"
        	        },
        	        {id: 2,
        	        ten: "𝗫𝗮̣ 𝗧𝗵𝘂̉",
        	        gioithieu: "𝗕𝗮̣𝗻 𝗰𝗼́ 𝟮 𝘃𝗶𝗲̂𝗻 𝗱𝗮̣𝗻 𝗱𝗲̂̉ 𝗯𝗮̆́𝗻 𝗯𝗮̂́𝘁 𝗸𝗶̀ 𝗮𝗶 𝗱𝗼́. 𝗖𝗵𝗶̉ 𝗱𝘂̛𝗼̛̣𝗰 𝗯𝗮̆́𝗻 𝟭 𝘃𝗶𝗲̂𝗻 𝗺𝗼̂̃𝗶 𝗻𝗴𝗮̀𝘆. 𝗩𝗶̀ 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝘀𝘂́𝗻𝗴 𝗿𝗮̂́𝘁 𝗹𝗼̛́𝗻 𝗻𝗲̂𝗻 𝘃𝗮𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘀𝗲̃ 𝗯𝗶̣ 𝗹𝗼̣̂ 𝘁𝗿𝗼𝗻 𝗻𝗵𝗮́𝘁 𝗯𝗮̆́𝗻 𝗱𝗮̂̀𝘂 𝘁𝗶𝗲̂𝗻.",
                   
