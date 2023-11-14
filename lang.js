var slugify = require("slugify");
const fs = require("fs");


const data = [
  {
    English: "Self-activation",
    မြန်မာ: "အကောင့်ဖွင့်ရန်",
    Chinese: "激活",
  },
  {
    English: "Enter Yoma bank account and NRC or Passport number",
    မြန်မာ:
      "သင်၏ရိုးမဘဏ်အကောင့်နှင့် မှတ်ပုံတင်နံပါတ် သို့မဟုတ် နိုင်ငံကူးလက်မှတ်ထည့်ရန်",
    Chinese: "输入Yoma 银行帐户 和 身份证号码",
  },
  {
    English: "Please provide the following information to register",
    မြန်မာ: "စာရင်းသွင်းရန် အောက်ပါအချက်များကို ဖြည့်စွက်ပါ",
    Chinese: "请提供以下信息进行注册",
  },
  {
    English: "Account number",
    မြန်မာ: "အကောင့် နံပါတ်",
    Chinese: "银行帐号",
  },
  {
    English: "Enter digits",
    မြန်မာ: "နံပါတ်ထည့်ပါ",
    Chinese: "输入数字",
  },
  {
    English: "Passport or 6 digits of your NRC number",
    မြန်မာ: "ပတ်စ်ပို့  (သို့) မှတ်ပုံတင်နံပါတ် ၆ လုံး",
    Chinese: "身份证号码的6 位数字 或 护照号码",
  },
  {
    English: "Enter passport or NRC",
    မြန်မာ: "ပတ်စ်ပို့ (သို့) မှတ်ပုံတင်နံပါတ် ရိုက်ထည့်ပါ",
    Chinese: "输入护照号码或身份证号码",
  },
  {
    English: "I agree of terms and conditions.",
    မြန်မာ: "စည်းမျဥ်းစည်းကမ်း နှင့် သတ်မှတ်ချက်များကို သဘောတူပါသည်",
    Chinese: "我同意条款和条件。",
  },
  { English: "Next", မြန်မာ: "ဆက်လုပ်မည်", Chinese: "下一步" },
  {
    English: "Enter Verification code",
    မြန်မာ: "အတည်ပြုကုတ်နံပါတ် ထည့်ပါ",
    Chinese: "输入验证码",
  },
  {
    English:
      "Please enter the verification code send to register phone number ** **** **45.",
    မြန်မာ:
      "ဘဏ်အကောင့်ဖွင့်စဉ်က စာရင်းသွင်းထားသည့် ဖုန်းနံပါတ် .............၄၅ သို့ ပေးပို့ထားသောအတည်ပြုကုတ်နံပါတ်ကို ထည့်ပါ",
    Chinese: "请输入验证代码发送到注册电话号码** **** ** 45。",
  },
  {
    English: "Verification code",
    မြန်မာ: "အတည်ပြုကုတ်နံပါတ်",
    Chinese: "验证码",
  },
  {
    English: "Enter 6 digit code",
    မြန်မာ: "ကုတ်နံပါတ် ၆ လုံးကို ထည့်ပါ",
    Chinese: "输入6位数代码",
  },
  {
    English: "OTP will be expired in 02:45",
    မြန်မာ: "02:45 တွင် OTP သက်တမ်းကုန်ဆုံးပါမည်",
    Chinese: "OTP将在02:45到期",
  },
  {
    English: "Don’t receive the OTP?",
    မြန်မာ: "OTP မရရှိပါသလား?",
    Chinese: "没收到OTP？",
  },
  {
    English: "Resend OTP",
    မြန်မာ: "ပြန်ပို့ရန်",
    Chinese: "重新发送OTP",
  },
  {
    English: "expired",
    မြန်မာ: "OTP သက်တမ်းကုန်ဆုံးပါပြီ",
    Chinese: "OTP过期",
  },
  {
    English:
      "Failed to enter OTP 3 times. Please contact call center 09796629662.",
    မြန်မာ:
      "OTP သုံးကြိမ်မှားယွင်းပါသည်။ Customer Care Center ၀၉၇၉၆၆၂၉၆၆၂ သို့ဆက်သွယ်ပါ။",
    Chinese: "未能输入3次OTP。请联系电话中心09796629662。",
  },
  {
    English: "Create your username",
    မြန်မာ: "အသုံးပြုသူအမည် သတ်မှတ်ရန်",
    Chinese: "创建您的用户名",
  },
  {
    English:
      "Enter username to login to Yoma Bank Next Portal. 8-25 Characters allowed. Alpha-numeric, No special characters allowed.",
    မြန်မာ:
      "Yoma Bank Next Portal ကို login ၀င်ရန် စာလုံးနှင့် ကိန်းဂဏန်း ၈လုံးမှ ၂၅လုံးရှိပြီး တအထူးအကမပါ၀င်သော အသုံးပြုသူအမည်ထည့်ပါ။ ",
    Chinese:
      "输入用户名登录到Yoma应用程序。允许8到12个字符。 alpha-numeric，不允许特殊字符。",
  },
  { English: "Username", မြန်မာ: "အသုံးပြုသူအမည်", Chinese: "用户名" },
  {
    English: "Enter username",
    မြန်မာ: "အသုံးပြုသူအမည် ထည့်ပါ",
    Chinese: "输入用户名",
  },
  {
    English: "Username is too short",
    မြန်မာ: "အသုံးပြုသူအမည် တိုတောင်းနေသဖြင့် အဆင်မပြေပါ။",
    Chinese: "用户名太短",
  },
  { English: "Next", မြန်မာ: "ဆက်လုပ်မည်", Chinese: "继续" },
  {
    English: "Create Password",
    မြန်မာ: "စကားဝှက်သတ်မှတ်ရန်",
    Chinese: "创建密码",
  },
  {
    English:
      "For security, use 8-16 characters with uppercase, lowercase, number and special characters.",
    Chinese:
      "请设置8-16个字的密码。密码需要包括大写字母、小写字母、数字、特殊符号。",
  },
  { English: "At least one uppercase letter" },
  { English: "At least one lowercase letter" },
  { English: "At least one number" },
  { English: "At least one special character" },
  { English: "Sufficient Length  (8-16 characters)" },
  { English: "Password", Chinese: "密码" },
  {
    English: "Enter password",
    မြန်မာ: "စကားဝှက် ထည့်ပါ",
    Chinese: "输入密码",
  },
  {
    English: "Confirm password",
    မြန်မာ: "စကားဝှက် အတည်ပြုပါ",
    Chinese: "确认你的密码",
  },
  { English: "Next", မြန်မာ: "ဆက်လုပ်မည်", Chinese: "继续" },
  {
    English: "Registration Successful",
    မြန်မာ: "စာရင်းသွင်းခြင်း အောင်မြင်ပါပြီ",
    Chinese: "注册成功",
  },
  {
    English: "You have been successfully registered and contimue to login",
    မြန်မာ:
      "စာရင်းသွင်းခြင်း အောင်မြင်စွာ ပြီးဆုံးပါပြီ။ Login ဝင်ရောက်ရန် ဆက်လက်လုပ်ဆောင်ပါ။",
    Chinese: "您已经成功注册并继续登录",
  },
  {
    English: "Go to Login",
    မြန်မာ: "Login သို့သွားပါ",
    Chinese: "转到登录",
  },
  {
    English: "Registration Failed",
    မြန်မာ: "စာရင်းသွင်းခြင်း မအောင်မြင်ပါ",
    Chinese: "注册失败",
  },
  {
    English:
      "Can’t connect to registration server and could not be completed!.",
    မြန်မာ: "ဆာဗာနှင့် မချိတ်ဆက်နိုင်၍ စာရင်းသွင်းခြင်း မလုပ်ဆောင်နိုင်ပါ",
    Chinese: "无法连接到注册服务器，无法完成！",
  },
  {
    English: "Sorry, something went wrong. Please try again.",
    မြန်မာ: "တစ်ခုခုမှားယွင်းနေပါသဖြင့် ထပ်မံကြိုးစားပေးပါ။",
    Chinese: "抱歉，出了一些问题。请再试一次",
  },
  {
    English: "Please try again!",
    မြန်မာ: "နောက်တစ်ကြိမ် လုပ်ဆောင်ပါ",
    Chinese: "请再试一次！",
  },
  { English: "Username", မြန်မာ: "အသုံးပြုသူအမည်", Chinese: "用户名称" },
  {
    English: "Password",
    မြန်မာ: "လျှို့ဝှက်ကုတ်နံပါတ်",
    Chinese: "密码",
  },
  {
    English: "Forgot Password?",
    မြန်မာ: "လျှို့ဝှက်ကုတ်နံပါတ်ကိုမေ့နေပါသလား?",
    Chinese: "忘记密码？",
  },
  { English: "Login", မြန်မာ: "ဝင်မည်", Chinese: "登录" },
  {
    English: "Self-activation",
    မြန်မာ: "အကောင့်ဖွင့်ရန်",
    Chinese: "激活",
  },
  {
    English: "Forgot Password",
    မြန်မာ: "လျှို့ဝှက်ကုတ်နံပါတ်ကိုမေ့နေပါသလား?",
    Chinese: "忘记密码？",
  },
  { English: "Username", မြန်မာ: "အသုံးပြုသူအမည်", Chinese: "用户名称" },
  {
    English: "National ID",
    မြန်မာ: "မှတ်ပုံတင်အမှတ်",
    Chinese: "身份证号码",
  },
  {
    English: "Mobile Number",
    မြန်မာ: "မိုဘိုင်းလ်ဖုန်းနံပါတ်",
    Chinese: "手机号码",
  },
  {
    English: "<< Back to Login",
    မြန်မာ: "Login သို့ပြန်သွားရန်",
    Chinese: "<< 返回登录页面",
  },
  { English: "Next", မြန်မာ: "ဆက်လုပ်မည်", Chinese: "继续" },
  { English: "Update password" },
  { English: " You need to change your password." },
  { English: "New Password" },
  { English: "Enter New Password" },
  { English: "Confirm Password" },
  { English: "Re-type New Password" },
  { English: "Update" },
  {
    English: "Invalid password: must not be equal to any of last 3 passwords.",
  },
  { English: "Dashboard", မြန်မာ: "ပင်မစာမျက်နှာ", Chinese: "仪表板" },
  {
    English: "Account Overview",
    မြန်မာ: "ဘဏ်စာရင်းများ",
    Chinese: "账户",
  },
  { English: "Fixed Deposit" },
  { English: "Loans", မြန်မာ: "ချေးငွေအချက်အလက်များ", Chinese: "贷款" },
  { English: "Transfer ", မြန်မာ: "ငွေလွှဲရန်", Chinese: "转移资金" },
  {
    English: "Own Account Transfer",
    မြန်မာ: "မိမိအကောင့်သို့ငွေလွှဲရန်",
    Chinese: "自有账户转账",
  },
  {
    English: "Other Account Transfer",
    မြန်မာ: "အခြားအကောင့်သို့ငွေလွှဲရန်",
    Chinese: "其他账户转账",
  },
  {
    English: "Other Bank Transfer",
    မြန်မာ: "အခြားဘဏ်သို့ငွေလွှဲရန်",
    Chinese: "其他银行转账",
  },
  { English: "WavePay Transfer" },
  {
    English: "Transaction History",
    မြန်မာ: "ငွေလွှဲပြောင်းမှုမှတ်တမ်းများ",
    Chinese: "交易纪录",
  },
  {
    English: "Receivers",
    မြန်မာ: "ငွေလွှဲလက်ခံသူများ",
    Chinese: "收件人",
  },
  { English: "Bill Payment", မြန်မာ: "ဘေလ်ပေးဆောင်ရန်", Chinese: "缴费" },
  {
    English: "Mobile Top-up",
    မြန်မာ: "ဖုန်းငွေဖြည့်ရန်",
    Chinese: "手机充值",
  },
  {
    English: "Bulk Payment",
    မြန်မာ: "အစုလိုက်ငွေလွှဲပြောင်းရန်",
    Chinese: "批量支付",
  },
  {
    English: "Bulk Transaction History",
    မြန်မာ: "အစုလိုက်ငွေလွှဲပြောင်းမှုမှတ်တမ်းများ",
    Chinese: "批量交易历史",
  },
  {
    English: "Schedule Payment",
    မြန်မာ: "ငွေပေးချေမှုကြိုတင်စီစဉ်ရန်",
    Chinese: "安排付款",
  },
  { English: "Approvals", မြန်မာ: "အတည်ပြုရန်", Chinese: "批准" },
  {
    English: "Change Language",
    မြန်မာ: "ဘာသာစကားပြောင်းရန်",
    Chinese: "改变语言",
  },
  { English: "Logout", မြန်မာ: "ထွက်ရန်", Chinese: "登出" },
  { English: "Notifications", မြန်မာ: "အသိပေးချက်များ", Chinese: "通知" },
  { English: "All" },
  { English: "News & Promotions" },
  { English: "Account Infromation" },
  { English: "System Information" },
  {
    English: "No Notifications",
    မြန်မာ: "အသိပေးချက်များမရှိပါ။",
    Chinese: "无通知",
  },
  {
    English: "Session Expired",
    မြန်မာ: "ဝင်ရောက်အသုံးပြုနိုင်မည့် သက်တမ်းကုန်ဆုံးသွားပါပြီ။",
    Chinese: "会话已过期",
  },
  {
    English: "Your session timed out. Please sign in again.",
    မြန်မာ:
      "သင်၏အသုံးပြုနိုင်မည့် အချိန်ကုန်ဆုံးသွားပါပြီ။ ကျေးဇူးပြု၍နောက်တစ်ကြိမ်ပြန်ဝင်ပါ။",
    Chinese: "您的会话超时。请重新登录。",
  },
  { English: "Ok", မြန်မာ: "အိုကေ", Chinese: "好的" },
  {
    English: "No Internet Connection",
    မြန်မာ: "အင်တာနက်ချိတ်ဆက်မှုမရှိပါ",
  },
  {
    English: "Please check your internet connection and try again.",
    မြန်မာ: "ကျေးဇူးပြု၍အင်တာနက်ချိတ်ဆက်မှုကို စစ်ဆေးပြီး ပြန်စမ်းကြည့်ပါ။",
  },
  { English: "Ok", မြန်မာ: "အိုကေ", Chinese: "好的" },
  {
    English: "Welcome Back",
    မြန်မာ: "ပြန်လည်ကြိုဆိုပါသည်",
    Chinese: "欢迎回来",
  },
  { English: "My Accounts " },
  {
    English: "Recent Transactions",
    မြန်မာ: "လတ်တလောငွေလွှဲပြောင်းမှုများ",
    Chinese: "最近交易",
  },
  { English: "Acc No.", မြန်မာ: "အကောင့်နံပါတ်", Chinese: "户口号码" },
  {
    English: "Transaction Initiated Date",
    မြန်မာ: "ငွေလွှဲပြောင်းမှုလုပ်ဆောင်သည့်နေ့",
    Chinese: "交易日期",
  },
  {
    English: "Transaction Reference ID",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်ချက် ရည်ညွန်းအမှတ်",
    Chinese: "交易参考 ID",
  },
  {
    English: "Transaction Amount",
    မြန်မာ: "ငွေလွှဲပြောင်းမည့်ပမာဏ",
    Chinese: "交易金额",
  },
  { English: "From", မြန်မာ: "မှ", Chinese: "从转移" },
  { English: "To", မြန်မာ: "သို့", Chinese: "传送到" },
  {
    English: "Transaction Type",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်မှုအမျိုးအစား",
    Chinese: "交易类型",
  },
  {
    English: "There is no transaction yet.",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်မှု မရှိသေးပါ။",
    Chinese: "还没有交易。",
  },
  { English: "My Accounts" },
  { English: "Deposit" },
  { English: "You don't have any active Deposit Accounts" },
  { English: "Acc No", မြန်မာ: "အကောင့်နံပါတ်", Chinese: "户口号码" },
  {
    English: "Account Detail",
    မြန်မာ: "အကောင့်အသေးစိတ် အချက်အလက်များ ",
    Chinese: "账户详情",
  },
  {
    English: "Download Account Statement",
    မြန်မာ: "ဘဏ်စာရင်းရှင်းတမ်းဒေါင်းလုဒ်လုပ်မည်",
    Chinese: "下载账户结单",
  },
  { English: "Transfer" },
  { English: "Account No", မြန်မာ: "အကောင့်နံပါတ်", Chinese: "户口号码" },
  { English: "Account Name" },
  { English: "Account Holder Name" },
  { English: "Account Number" },
  { English: "Available Balance" },
  {
    English: "Account Currency",
    မြန်မာ: "ငွေကြေးအမျိုးအစား",
    Chinese: "账户币种",
  },
  { English: "Interest Rate" },
  {
    English: "Blocked Amount",
    မြန်မာ: "လွှဲမရသည့်ပမာဏ",
    Chinese: "冻结金额",
  },
  {
    English: "Booked Balance",
    မြန်မာ: "စာရင်းရှိပမာဏ",
    Chinese: "预订余额",
  },
  {
    English: "Account Type",
    မြန်မာ: "အကောင့်အမျိုးအစား",
    Chinese: "帐户类型",
  },
  {
    English: "Opening Date",
    မြန်မာ: "အကောင့်ဖွင့်သည့်နေ့",
    Chinese: "账户开设日期",
  },
  {
    English: "Account Status",
    မြန်မာ: "အကောင့်အခြေအနေ",
    Chinese: "帐户状态",
  },
  { English: "Back" },
  {
    English: "Transaction List",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်ချက်စာရင်းများ",
    Chinese: "交易清单",
  },
  { English: "From Date", မြန်မာ: "ရက်စွဲမှ", Chinese: "从日期" },
  { English: "To Date", မြန်မာ: "ရက်စွဲသို့", Chinese: "迄今为止" },
  { English: "Search", မြန်မာ: "ရှာမည်", Chinese: "搜索" },
  {
    English: "Clear All",
    မြန်မာ: "အားလုံးရှင်းမည်",
    Chinese: "全部清除",
  },
  {
    English: "There is no transaction yet.",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်မှုမရှိသေးပါ။",
    Chinese: "还没有交易。",
  },
  {
    English: "Download Account Statement",
    မြန်မာ: "ဘဏ်စာရင်းရှင်းတမ်းဒေါင်းလုဒ်လုပ်ရန်",
    Chinese: "下载账户结单",
  },
  {
    English:
      "You could only download account statements that are valid for the last 12 months.",
    မြန်မာ:
      "လွန်ခဲ့သော ၁၂လ၏စာရင်းရှင်းတမ်းကို လအလိုက် ရွေးချယ်ကာ ဒေါင်းလုဒ်လုပ်နိုင်ပါသည်",
    Chinese: "您可以下载最近 12 个月数据的每月账户报表",
  },
  {
    English: "Please choose month",
    မြန်မာ: "လကိုရွေးချယ်ပါ",
    Chinese: "选择一个月",
  },
  { English: "Download ", မြန်မာ: "ဒေါင်းလုဒ်လုပ်မည်", Chinese: "下载" },
  { English: "Cancel", မြန်မာ: "မလုပ်တော့ပါ", Chinese: "取消" },
  {
    English: "Downloading ......",
    မြန်မာ: "ဒေါင်းလုဒ်လုပ်နေပါသည် .........",
    Chinese: "正在下载......",
  },
  {
    English: "Download Successfully",
    မြန်မာ: "ဒေါင်းလုဒ်လုပ်ခြင်းအောင်မြင်ပါသည်",
    Chinese: "下载成功",
  },
  {
    English: "Change your account name",
    မြန်မာ: "အကောင့်နာမည်ပြောင်းမည်",
    Chinese: "更改您的帐户名称",
  },
  {
    English: "Account Rename",
    မြန်မာ: "အကောင့်နာမည် ပြန်လည်သတ်မှတ်ပါ",
    Chinese: "帐户重命名",
  },
  {
    English: "Enter account name",
    မြန်မာ: "အကောင့်နာမည် ထည့်ပါ",
    Chinese: "输入您的帐户名称",
  },
  { English: "Cancel", မြန်မာ: "မလုပ်တော့ပါ" },
  { English: "Save" },
  {
    English: "Transaction Initiated Date",
    မြန်မာ: "ငွေလွှဲပြောင်းမှုလုပ်ဆောင်သည့်နေ့",
    Chinese: "交易日期",
  },
  {
    English: "Transaction Reference ID",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်ချက် ရည်ညွန်းအမှတ်",
    Chinese: "交易参考 ID",
  },
  {
    English: "Transaction Amount",
    မြန်မာ: "ငွေလွှဲပြောင်းမည့်ပမာဏ",
    Chinese: "交易金额",
  },
  { English: "From", မြန်မာ: "မှ", Chinese: "从转移" },
  { English: "To", မြန်မာ: "သို့", Chinese: "传送到" },
  {
    English: "Transaction Type",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်မှုအမျိုးအစား",
    Chinese: "交易类型",
  },
  { English: "Transaction ID" },
  { English: "Message", မြန်မာ: "မှတ်ချက်", Chinese: "评论" },
  {
    English: "Purpose of Transaction",
    မြန်မာ: "ငွေလွှဲပြောင်းမှုရည်ရွယ်ချက်",
    Chinese: "交易目的",
  },
  {
    English: "Transfer Fees",
    မြန်မာ: "ငွေလွှဲ၀န်ဆောင်ခ",
    Chinese: "转让费",
  },
  { English: "Remark", မြန်မာ: "မှတ်ချက်", Chinese: "评论" },
  {
    English: "Receiver Bank Name",
    မြန်မာ: "လက်ခံသူဘဏ်နာမည်",
    Chinese: "收款银行名称",
  },
  {
    English: "Receiver Branch Name",
    မြန်မာ: "လက်ခံသူဘဏ်ခွဲနာမည်",
    Chinese: "收款人分行名称",
  },
  { English: "Fixed Deposit" },
  { English: "Acc No", မြန်မာ: "အကောင့်နံပါတ်", Chinese: "户口号码" },
  { English: "Fixed Deposit Account" },
  {
    English:
      "Grow your savings now by opening a Fixed Deposit account with the interest rate of 8.25% p.a.",
  },
  {
    English:
      "Grow your savings now by opening a Super Fixed Deposit account with the highest interest rate of 9.75% p.a, transferring from a Flexi Everyday account.",
  },
  {
    English: "Click here to open an account",
    မြန်မာ: "စာရင်းသေအပ်ငွေစာရင်းဖွင့်ရန် ဤနေရာကိုနှိပ်ပါ",
    Chinese: "点击这里开设帐户",
  },
  {
    English: "Open Fixed Deposit Account",
    မြန်မာ: "စာရင်းသေအပ်ငွေစာရင်းဖွင့်မည်",
    Chinese: "创建定期存款",
  },
  { English: "Earn More interest with Fixed Deposit Account!" },
  {
    English: "Total Interest",
    မြန်မာ: "အတိုးနှုန်း စုစုပေါင်း",
    Chinese: "总利息",
  },
  {
    English: "Total interest is :",
    မြန်မာ: "အတိုးနှုန်း စုစုပေါင်း",
    Chinese: "总利息是：",
  },
  {
    English: "Interest pay-out account",
    မြန်မာ: "အတိုးထည့်သွင်းမည့်အကောင့်",
    Chinese: "利息支付帐户",
  },
  {
    English: "Super Fixed Deposit Account",
    မြန်မာ: "Super စာရင်းသေအပ်ငွေစာရင်း",
    Chinese: "Super定期存款帐户",
  },
  {
    English: "Open Super Fixed Deposit Account",
    မြန်မာ: "Super စာရင်းသေအပ်ငွေစာရင်းဖွင့်မည်",
    Chinese: "开设Super定期账户",
  },
  {
    English: "From which account",
    မြန်မာ: "အသုံးပြုမည့်အကောင့်",
    Chinese: "从哪个帐户",
  },
  {
    English: "Deposit Amount",
    မြန်မာ: "အပ်ငွေ ပမာဏ",
    Chinese: "存款金额",
  },
  {
    English: "Enter amount",
    မြန်မာ: "အပ်ငွေ ပမာဏရိုက်ထည့်ပါ။",
    Chinese: "输入金额",
  },
  {
    English: "Deposit Conditions",
    မြန်မာ: "အပ်ငွေသက်တမ်း",
    Chinese: "存款条件",
  },
  {
    English: "Maturity",
    မြန်မာ: "စာရင်းသက်တမ်းပြည့်ခြင်း",
    Chinese: "到期",
  },
  { English: "Maturity Info" },
  {
    English:
      "Maturity methods can be effective if your new fixed deposit account is due.",
  },
  {
    English: "Principal Only Rollover ",
    မြန်မာ: "အရင်းသက်တမ်းတိုးမည်",
    Chinese: "Principal Only Rollover",
  },
  {
    English:
      "Interest will be payout to your source account (or) selected account and Principal will be renewal for the next term.",
  },
  {
    English: "No Rollover",
    မြန်မာ: "တိုးရင်းပေါင်းထုတ်မည်",
    Chinese: "No Rollover",
  },
  { English: "Principal and Interest will be payout to your account." },
  {
    English: "Principal+Interest  Rollover",
    မြန်မာ: "တိုးရင်းပေါင်း သက်တမ်းတိုးမည်",
    Chinese: "本金+利息",
  },
  {
    English:
      "Both principal and interest amount will be renewal for the next term.",
  },
  { English: "Close" },
  {
    English:
      "Total payback amount will be 50,308.21 MMK and interest will be 308.21 MMK.",
    မြန်မာ: "စုစုပေါင်းပြန်ရမည့် ပမာဏမှာ ( ) ကျပ် ဖြစ်သည်။",
    Chinese: "总回报金额为 [ ] MMK",
  },
  {
    English: "Interest Pay-out account",
    မြန်မာ: "အတိုးထည့်သွင်းမည့် အကောင့်",
    Chinese: "支出帐户",
  },
  { English: "Next", မြန်မာ: "ဆက်သွားမည်", Chinese: "继续" },
  { English: "Cancel" },
  {
    English: "Total Payback Amount",
    မြန်မာ: "စုစုပေါင်းပြန်ရမည့် ပမာဏ",
    Chinese: "总回报金额",
  },
  {
    English: "Interest amount will be [ ] mmk.",
    မြန်မာ: "အတိုးပမာဏမှာ ( ) ကျပ်ဖြစ်သည်။",
    Chinese: "利息金额为 [ ] MMK",
  },
  { English: "From", မြန်မာ: "အသုံးပြုမည့်အကောင့်", Chinese: "从" },
  {
    English: "Deposit Amount",
    မြန်မာ: "အပ်ငွေ အမျိုးအစား",
    Chinese: "存款金额",
  },
  { English: "Deposit Type", မြန်မာ: "အပ်ငွေ ပမာဏ", Chinese: "存款类型" },
  {
    English: "Deposit Conditions",
    မြန်မာ: "အပ်ငွေအခြေအနေ",
    Chinese: "存款条件",
  },
  {
    English: "Maturity",
    မြန်မာ: "စာရင်းသက်တမ်းပြည့်မည့်အချိန်",
    Chinese: "到期",
  },
  { English: "Maturity Date" },
  {
    English: "Interest Pay-out account",
    မြန်မာ: "အတိုးထည့်သွင်းမည့် အကောင့်",
    Chinese: "支出帐户",
  },
  { English: "Principal will be paid to your source account." },
  { English: "Back" },
  { English: "Cancel" },
  { English: "Confirm", မြန်မာ: "အတည်ပြုမည်။", Chinese: "确认" },
  {
    English: "Successfully created your Fixed Deposit Account!",
    မြန်မာ: "စာရင်းသေအပ်ငွေစာရင်း အောင်မြင်စွာဖွင့်လှစ်ပြီးပါပြီ။",
    Chinese: "成功创建了您的定期存款帐户！",
  },
  {
    English: "Minimum transaction amount should be 50,000.00 MMK.",
    မြန်မာ: "အနည်းဆုံး ၅၀,၀၀၀ ကျပ်ဖြင့် အပ်ငွေစာရင်းဖွင့်လှစ်ရပါမည်",
    Chinese: "最低余额为50000。",
  },
  { English: "Sorry", မြန်မာ: "ဝမ်းနည်းပါတယ်", Chinese: "对不起" },
  {
    English: "You're not Flexi Account user!",
    မြန်မာ: "လူကြီးမင်းသည် Flexi Account အသုံးပြုသူမဟုတ်ပါ",
    Chinese: "您不是 Flexi 帐户使用者!",
  },
  { English: "Verify Your Transaction" },
  { English: "Enter One Time Password to confirm your transfer" },
  {
    English:
      "One time password is sent to your registered mobile number. Please enter the code in the message to authenticate yourself.",
  },
  { English: "OTP will be expired in 2:49" },
  { English: "OTP Expired!" },
  { English: "Don't receive the OTP? Resend-One Time Password" },
  {
    English: "Loans Info",
    မြန်မာ: "ချေးငွေအချက်အလက်များ",
    Chinese: "贷款信息",
  },
  {
    English: "Loan Account No",
    မြန်မာ: "ချေးငွေအကောင့်နံပါတ်",
    Chinese: "贷款账号",
  },
  {
    English: "You do not have any active loan.",
    မြန်မာ: "မည်သည့်ချေးငွေမှ မရှိပါ။",
    Chinese: "您没有任何有效贷款。",
  },
  {
    English: "There is no repayment yet.",
    မြန်မာ: "ပြန်ဆပ်ခြင်းမရှိသေးပါ။",
    Chinese: "目前还没有还款。",
  },
  {
    English: "Loan Detail",
    မြန်မာ: "ချေးငွေအသေးစိတ်အချက်အလက်များ",
    Chinese: "贷款详情",
  },
  {
    English: "Loan Account No",
    မြန်မာ: "ချေးငွေအကောင့်နံပါတ်",
    Chinese: "贷款账号",
  },
  {
    English: "Disbursement Date",
    မြန်မာ: "ချေးငွေထုတ်ပေးသည့်ရက်စွဲ",
    Chinese: "付款日期",
  },
  { English: "Loan Amount", မြန်မာ: "ချေးငွေပမာဏ", Chinese: "贷款额度" },
  { English: "Interest Rate", မြန်မာ: "အတိုးနှုန်း", Chinese: "利率" },
  { English: "Loan Terms", မြန်မာ: "ချေးငွေကာလ", Chinese: "贷款条款" },
  { English: "Currency", မြန်မာ: "ငွေကြေးအမျိုးအစား", Chinese: "货币" },
  {
    English: "Loan Status",
    မြန်မာ: "ချေးငွေအခြေအနေ",
    Chinese: "贷款状况",
  },
  {
    English: "Summary",
    မြန်မာ: "အနှစ်ချုပ် အချက်အလက်များ",
    Chinese: "概括",
  },
  {
    English: "Loan Account No",
    မြန်မာ: "ချေးငွေအကောင့်နံပါတ်",
    Chinese: "贷款账号",
  },
  {
    English: "Loan Type",
    မြန်မာ: "ချေးငွေအမျိုးအစား",
    Chinese: "贷款类型",
  },
  { English: "Currency", မြန်မာ: "ငွေကြေးအမျိုးအစား", Chinese: "货币" },
  { English: "Loan Amount", မြန်မာ: "ချေးငွေပမာဏ", Chinese: "贷款额度" },
  { English: "Interest Rate", မြန်မာ: "အတိုးနှုန်း", Chinese: "利率" },
  {
    English: "Repayment Type",
    မြန်မာ: "ပေးဆောင်ရမည့်အမျိုးအစား",
    Chinese: "还款类型",
  },
  {
    English: "Repayment Frequency",
    မြန်မာ: "ပေးဆောင်ရမည့်အကြိမ်ရေ",
    Chinese: "还款频率",
  },
  { English: "Loan Terms", မြန်မာ: "ချေးငွေကာလ", Chinese: "贷款条款" },
  {
    English: "Next Repayment Amount",
    မြန်မာ: "နောက်တစ်ကြိမ်ပေးဆောင်ရမည့်ပမာဏ",
    Chinese: "下次还款金额",
  },
  {
    English: "Next Repayment Date",
    မြန်မာ: "နောက်တစ်ကြိမ်ပေးဆောင်ရမည့်နေ့",
    Chinese: "下一个还款日期",
  },
  {
    English: "Overdue Days",
    မြန်မာ: "ရက်လွန်ရက်များ",
    Chinese: "逾期天数",
  },
  {
    English: "Last Paid Date",
    မြန်မာ: "နောက်ဆုံးပေးဆောင်သည့်ရက်စွဲ",
    Chinese: "最后付款日期",
  },
  {
    English: "Overdue Amount",
    မြန်မာ: "ရက်လွန်ပမာဏ",
    Chinese: "逾期金额",
  },
  { English: "Penalty", မြန်မာ: "ဒဏ်ငွေ", Chinese: "惩罚" },
  {
    English: "Maturity Date",
    မြန်မာ: "စာရင်းသက်တမ်းပြည့်မည့်နေ့",
    Chinese: "成人礼",
  },
  {
    English: "Loan Status",
    မြန်မာ: "ချေးငွေအခြေအနေ",
    Chinese: "贷款状况",
  },
  {
    English: "Repayment Schedule",
    မြန်မာ: "ပြန်ဆပ်ရမည့်အချိန်ဇယား",
    Chinese: "还款时间表",
  },
  {
    English: "Payment Due On",
    မြန်မာ: "ပေးချေရမည့်ရက်",
    Chinese: "付款到期日",
  },
  {
    English: "Repayment No",
    မြန်မာ: "ပေးဆောင်ရမည့်အကြိမ်ရေ",
    Chinese: "还款编号",
  },
  {
    English: "Repayment Amount",
    မြန်မာ: "ပေးဆောင်ရမည့်ပမာဏ",
    Chinese: "还款金额",
  },
  { English: "Interest", မြန်မာ: "အတိုးပမာဏ", Chinese: "兴趣" },
  { English: "Principal ", မြန်မာ: "အရင်းစုစုပေါင်း", Chinese: "主要的" },
  {
    English: "Overdue Days",
    မြန်မာ: "ရက်လွန်ရက်များ",
    Chinese: "逾期天数",
  },
  { English: "Status", မြန်မာ: "အခြေအနေ", Chinese: "地位" },
  {
    English: "Search by Status",
    မြန်မာ: "အခြေအနေအလိုက်ရှာဖွေမည်",
    Chinese: "按状态搜索",
  },
  { English: "All", မြန်မာ: "အားလုံး", Chinese: "全部" },
  { English: "Paid", မြန်မာ: "ပေးဆောင်ပြီး", Chinese: "有薪酬的" },
  { English: "Unpaid", မြန်မာ: "မပေးဆောင်ရသေးပါ", Chinese: "未付" },
  {
    English: "UpComing",
    မြန်မာ: "မကြာမီပေးဆောင်ရန်",
    Chinese: "即将推出",
  },
  {
    English: "There is no repayment yet.",
    မြန်မာ: "ပေးဆောင်ထားခြင်းမရှိသေးပါ။",
    Chinese: "目前还没有还款。",
  },
  {
    English: "Transaction History",
    မြန်မာ: "ငွေလွှဲပြောင်းမှုမှတ်တမ်းများ",
    Chinese: "交易纪录",
  },
  { English: "From Date", မြန်မာ: "ရက်စွဲမှ", Chinese: "从日期" },
  { English: "To Date", မြန်မာ: "ရက်စွဲသို့", Chinese: "迄今为止" },
  { English: "Search", မြန်မာ: "ရှာမည်", Chinese: "搜索" },
  {
    English: "Clear All",
    မြန်မာ: "အားလုံးရှင်းမည်",
    Chinese: "全部清除",
  },
  {
    English: "Transaction Initiated Date",
    မြန်မာ: "ငွေလွှဲပြောင်းမှုလုပ်ဆောင်သည့်နေ့",
    Chinese: "交易日期",
  },
  {
    English: "Transaction Reference ID",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်ချက် ရည်ညွန်းအမှတ်",
    Chinese: "交易参考 ID",
  },
  {
    English: "Transaction Amount",
    မြန်မာ: "ငွေလွှဲပြောင်းမည့်ပမာဏ",
    Chinese: "交易金额",
  },
  { English: "From", မြန်မာ: "မှ", Chinese: "从转移" },
  { English: "To", မြန်မာ: "သို့", Chinese: "传送到" },
  {
    English: "Transaction Type",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်မှုအမျိုးအစား",
    Chinese: "交易类型",
  },
  {
    English: "Transaction Detail",
    မြန်မာ: "ငွေလွှဲပြောင်းမှုအသေးစိတ်မှတ်တမ်းများ",
    Chinese: "交易详情",
  },
  {
    English: "Transaction Date",
    မြန်မာ: "ငွေလွှဲပြောင်းမှုလုပ်ဆောင်သည့်နေ့",
    Chinese: "交易日期",
  },
  {
    English: "Download Transaction",
    မြန်မာ: "ဒေါင်းလုဒ်လုပ်မည်",
    Chinese: "下载",
  },
  { English: "Transaction ID" },
  { English: "Message", မြန်မာ: "မှတ်ချက်", Chinese: "评论" },
  {
    English: "Purpose of Transaction",
    မြန်မာ: "ငွေလွှဲပြောင်းမှုရည်ရွယ်ချက်",
    Chinese: "交易目的",
  },
  {
    English: "Transfer Fees",
    မြန်မာ: "ငွေလွှဲ၀န်ဆောင်ခ",
    Chinese: "转让费",
  },
  { English: "Remark", မြန်မာ: "မှတ်ချက်", Chinese: "评论" },
  {
    English: "Receiver Bank Name",
    မြန်မာ: "လက်ခံသူဘဏ်နာမည်",
    Chinese: "收款银行名称",
  },
  {
    English: "Receiver Branch Name",
    မြန်မာ: "လက်ခံသူဘဏ်ခွဲနာမည်",
    Chinese: "收款人分行名称",
  },
  {
    English: "There is no transaction yet.",
    မြန်မာ: "ငွေကြေးလုပ်ဆောင်မှု မရှိသေးပါ။",
    Chinese: "还没有交易。",
  },
];


function generateKeys(data) {
  return data.map((item) => {
    return slugify(item.English, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: false, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: "vi", // language code of the locale to use
      trim: true,
      // trim leading and trailing replacement chars, defaults to `true`
    }).toUpperCase().replace(/-/g, "_").replace(/'/g, "");
  });
}


function generateLang(locale, data, keys) {
  const lang = {};
  keys.forEach((key, idx) => {
    lang[key] = data[idx][locale] ? data[idx][locale] : data[idx]["English"];
  });
  return lang;
}


// console.log(data);


// console.log(generateKeys(data))
const keys = generateKeys(data);
const en = generateLang("English", data, keys);
const mm = generateLang("မြန်မာ", data, keys);
const ch = generateLang("Chinese", data, keys);

// console.log(en);


[
  { lang: en, file: "en" },
  { lang: mm, file: "mm" },
  { lang: ch, file: "ch" },
].forEach((lang) => {
  fs.writeFile(
    `${__dirname}/${lang.file}.json`,
    JSON.stringify(lang.lang),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing to JSON file:", err);
      } else {
        console.log("JSON data has been written to the file successfully.");
      }
    }
  );
});