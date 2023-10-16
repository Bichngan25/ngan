
const REGREX ={
    email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/
}
const validate =(rules, values) => {
    // tao errorobj de gan gia tri (gia tri rong)
    let errObj = {};
    // duyet qua tung file (forin)
    for (const ruleKey in rules){
        // duyet qua mang (forof)
        for (const rule of rules[ruleKey]) {
            // ============ check function ==============
            if (typeof rule === "function") {
                const message = rule(values[ruleKey],values)

                if (!!message){
                    errObj[ruleKey] = message || "xác thực lỗi"
                    break
                }
            }

            // ============ check case required =========
            if (rule.required){
                // console.log("required with field:", ruleKey)
                // console.log("required with value:", values[ruleKey])
                // check tung rulekey xem cos gia tri hay k
                if (!!!values[ruleKey]){
                    // kiem tra xem co message hay k
                    errObj[ruleKey] = rule.message || " Vui lòng nhập"
                    // neu chay duoc dong tren thi break
                    break;
                }
            }
            //============= check case regrex ==========
            if (rule.regrex instanceof RegExp){
                // check regrex
                if (!rule.regrex.test(values[ruleKey])){
                    // neu  bao loi thi hien thi
                    errObj[ruleKey] = rule.message || " Vui lòng nhập đúng định dạng"
                    // neu chay duoc dong tren thi break de bo qua nhung case sau
                    break
                }
            } else if(rule.regrex in REGREX){
                if (!REGREX[rule.regrex].test(values[ruleKey])){
                    // neu  bao loi thi hien thi
                    errObj[ruleKey] = rule.message || " Vui lòng nhập đúng định dạng"
                    // neu chay duoc dong tren thi break de bo qua nhung case sau
                    break
                }
            }
        }
    }
    console.log("errObj", errObj)
    return errObj;
}
 
// ham lam ngan gon code trong ham rules require
export const requireRule = (message) => {
    return {
        required:true,
        message
    }
}
export const regrexRule = (message, regrex) =>{
    return {
        regrex,
        message
    }
}
export default validate;