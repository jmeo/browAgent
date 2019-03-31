function isPc(userAgent){
    let agent = userAgent.toLocaleLowerCase();
    let partten = /windows\s+nt\s+(\d+)\.\d/;
    let ps = agent.match(partten);
    if((ps && ps[1] == 'window nt' && parseInt(ps[2]>5)) || agent.indexOf('mac') > -1){
        return true;
    }else{
        return false;
    }
}

function isMobile(userAgent){
    return userAgent.toLocaleLowerCase().indexOf('mobile') > -1;
}

function isIE(userAgent){
    var agent = userAgent.toLocaleLowerCase();
    //IE 内核都是使用 trident
    //IE8-IE10 可通过msie 标识判断， IE11 特殊标识 rv:11
    return agent.indexOf('msie') > -1 || (agent.indexOf('rv:11') && agent.indexOf('trident') > -1);
}

function isEDGE(userAgent){
    return userAgent.toLocaleLowerCase().indexOf('edge') > -1;
}

function isChrome(userAgent){
    var agent = userAgent.toLocaleLowerCase();
    return agent.indexOf('chrome') > -1 && !isSafari(agent) && !isEDGE(agent);
}

function isSafari(userAgent){
    var agent = userAgent.toLocaleLowerCase();
    return agent.indexOf('safari') > -1 && agent.indexOf('chrome') == -1;
}

function isFirefox(userAgent){
    return userAgent.toLocaleLowerCase().indexOf('firefox') > -1;
}

function is360(userAgent){
    return userAgent.toLocaleLowerCase().indexOf('360se') > -1;
}

function isQQ(userAgent){
    return userAgent.toLocaleLowerCase().indexOf('qqbrower') > -1;
}

function getBrowerVersion(userAgent){
    if(!userAgent){
        return;
    }
    var agentStr = userAgent.toLocaleLowerCase();
    var agent = {};
    if(isIE(userAgent)){
        agent.factory = 'IE';
        var partten = /msie\s(\d+)\.?\d?/;
        var sr = agentStr.match(partten);
        if(sr && sr.length > 0){
            agent.version = sr[1];
        }else if(agentStr.indexOf('rv:11')){
            agent.version = 11;
        }
    }else if(isEDGE(userAgent)){
        agent.factory = 'edge';
    }else if(isFirefox(userAgent)){
        var partten = /firefox\/(\d)\.?\d*/;
        var sr = agentStr.match(partten);
        if(sr && sr.length > 0){
            agent.factory = 'firefox';
            agent.version = sr[1];
        }
    }else if(isSafari(userAgent)){
        agent.factory = 'safari';
    }else if(isChrome(userAgent)){
        agent.factory = 'chrome';
    }
    return agent;
}
