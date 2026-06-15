<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Crown Tracker</title>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#4f8ef7">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Crown Tracker">
<link rel="apple-touch-icon" href="icon.png">
<style>
:root{
  --bg:#0d0f14;--bg2:#13161e;--bg3:#181c27;--bg4:#1e2333;
  --border:#252a3a;--accent:#4f8ef7;--aglow:rgba(79,142,247,.18);
  --gold:#f5c842;--green:#2ecc71;--red:#e74c3c;
  --t1:#e8ecf4;--t2:#8892a4;--t3:#4a5268;
  --sh:0 4px 24px rgba(0,0,0,.4);--shh:0 8px 32px rgba(79,142,247,.25);
  --r:12px;--rs:8px;--f:system-ui,-apple-system,'Segoe UI',sans-serif;
}
.light{--bg:#f0f2f8;--bg2:#e8eaf2;--bg3:#fff;--bg4:#f5f7ff;--border:#dde1ef;--aglow:rgba(58,123,213,.12);--t1:#1a2040;--t2:#4a5578;--t3:#8892a4;--sh:0 4px 20px rgba(0,0,0,.08);--shh:0 8px 28px rgba(58,123,213,.2);}
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:var(--f);background:var(--bg);color:var(--t1);min-height:100vh;transition:background .3s,color .3s;}
.hidden{display:none!important;}
::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:var(--bg2);}::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px;}

/* LOGIN */
#loginPage{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;background:radial-gradient(ellipse at 30% 20%,rgba(79,142,247,.08),transparent 60%),var(--bg);}
.login-logo{text-align:center;margin-bottom:36px;}
.login-logo .li{width:72px;height:72px;background:linear-gradient(135deg,#4f8ef7,#9b59b6);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 14px;box-shadow:0 8px 32px rgba(79,142,247,.35);}
.login-logo h1{font-size:34px;font-weight:800;color:var(--accent);}
.login-logo p{color:var(--t2);font-size:13px;letter-spacing:1.5px;text-transform:uppercase;margin-top:5px;}
.role-cards{display:flex;gap:14px;margin-bottom:28px;flex-wrap:wrap;justify-content:center;}
.rc{background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:18px 24px;text-align:center;cursor:pointer;transition:all .3s;min-width:130px;}
.rc:hover,.rc.active{border-color:var(--accent);box-shadow:var(--shh);}
.rc.active{background:var(--aglow);}
.rc .ri{font-size:26px;margin-bottom:7px;}.rc .rn{font-weight:600;font-size:14px;}.rc .rd{font-size:11px;color:var(--t3);margin-top:3px;}
.lf{background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:28px;width:100%;max-width:400px;box-shadow:var(--sh);}
.lf h2{font-size:18px;font-weight:700;margin-bottom:20px;text-align:center;}
.fg{margin-bottom:16px;}
.fg label{display:block;font-size:11px;font-weight:600;color:var(--t2);letter-spacing:.8px;text-transform:uppercase;margin-bottom:7px;}
.fg input,.fg select,.fg textarea{width:100%;background:var(--bg2);border:1px solid var(--border);border-radius:var(--rs);padding:11px 14px;color:var(--t1);font-size:13px;font-family:var(--f);transition:all .3s;}
.fg input:focus,.fg select:focus,.fg textarea:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--aglow);}
.rem{display:flex;align-items:center;gap:8px;margin-bottom:14px;font-size:13px;color:var(--t2);cursor:pointer;}
.rem input{width:15px;height:15px;}
.btn{display:inline-flex;align-items:center;gap:7px;padding:11px 18px;border-radius:var(--rs);font-size:13px;font-weight:600;cursor:pointer;border:none;transition:all .3s;font-family:var(--f);}
.btn:hover{transform:translateY(-1px);}
.btn-p{background:linear-gradient(135deg,#4f8ef7,#6b6af7);color:#fff;box-shadow:0 4px 16px rgba(79,142,247,.3);}
.btn-p:hover{box-shadow:var(--shh);}
.btn-s{background:var(--bg4);color:var(--t1);border:1px solid var(--border);}
.btn-s:hover{border-color:var(--accent);}
.btn-d{background:linear-gradient(135deg,#e74c3c,#c0392b);color:#fff;}
.btn-g{background:linear-gradient(135deg,#2ecc71,#27ae60);color:#fff;}
.btn-gold{background:linear-gradient(135deg,#f5c842,#f39c12);color:#1a1a1a;}
.btn-sm{padding:7px 12px;font-size:12px;}
.btn-full{width:100%;justify-content:center;}
.btn-back{background:var(--bg4);color:var(--t2);border:1px solid var(--border);padding:7px 14px;border-radius:var(--rs);font-size:12px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:5px;transition:all .3s;font-family:var(--f);}
.btn-back:hover{border-color:var(--accent);color:var(--accent);}
.lerr{color:var(--red);font-size:12px;text-align:center;margin-top:10px;padding:9px;background:rgba(231,76,60,.1);border-radius:var(--rs);border:1px solid rgba(231,76,60,.2);}

/* APP */
#appPage{display:flex;flex-direction:column;min-height:100vh;}
.top-bar{background:var(--bg3);border-bottom:1px solid var(--border);padding:0 20px;height:58px;display:flex;align-items:center;gap:14px;position:sticky;top:0;z-index:100;}
.tb-menu{font-size:18px;cursor:pointer;color:var(--t2);padding:6px;border-radius:6px;transition:all .3s;}
.tb-menu:hover{background:var(--bg4);color:var(--t1);}
.tb-search{flex:1;max-width:420px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--rs);padding:9px 14px;display:flex;align-items:center;gap:8px;transition:all .3s;}
.tb-search:hover{border-color:var(--accent);}
.tb-search input{background:none;border:none;outline:none;color:var(--t1);font-size:13px;font-family:var(--f);flex:1;}
.tb-search input::placeholder{color:var(--t3);}
.tb-search .kbd{background:var(--bg4);border:1px solid var(--border);border-radius:4px;padding:1px 5px;font-size:10px;color:var(--t3);}
.tb-right{margin-left:auto;display:flex;align-items:center;gap:10px;}
.new-case-btn{background:var(--accent);color:#fff;border:none;border-radius:var(--rs);padding:9px 16px;font-size:13px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px;font-family:var(--f);transition:all .3s;white-space:nowrap;}
.new-case-btn:hover{box-shadow:var(--shh);}
.cloud-sync{display:flex;align-items:center;gap:7px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--rs);padding:7px 12px;}
.cs-title{font-size:12px;font-weight:600;}.cs-sub{font-size:10px;color:var(--green);}
.tb-icon{width:34px;height:34px;border-radius:var(--rs);border:1px solid var(--border);background:var(--bg2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .3s;font-size:15px;position:relative;}
.tb-icon:hover{border-color:var(--accent);background:var(--aglow);}
.notif-badge{position:absolute;top:-4px;right:-4px;background:var(--accent);color:#fff;border-radius:50%;width:16px;height:16px;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;}
.avatar-btn{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#4f8ef7,#9b59b6);border:2px solid var(--accent);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:13px;font-weight:700;color:#fff;overflow:hidden;flex-shrink:0;}
.avatar-btn img{width:100%;height:100%;object-fit:cover;}
.app-body{display:flex;flex:1;}
.sidebar{width:210px;background:var(--bg2);border-right:1px solid var(--border);padding:14px 0;display:flex;flex-direction:column;position:fixed;top:58px;left:0;height:calc(100vh - 58px);overflow-y:auto;flex-shrink:0;z-index:200;transition:transform .3s ease;}
.sidebar.closed{transform:translateX(-100%);}
.sidebar-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:199;}
.sidebar-overlay.visible{display:block;}
.main-content{margin-left:210px;transition:margin-left .3s ease;}
.main-content.full{margin-left:0;}
.nav-label{font-size:10px;font-weight:700;color:var(--t3);letter-spacing:1.2px;text-transform:uppercase;padding:7px 18px 3px;}
.nav-item{display:flex;align-items:center;gap:9px;padding:9px 14px;cursor:pointer;font-size:13px;font-weight:500;color:var(--t2);transition:all .3s;margin:0 6px 1px;border-radius:var(--rs);}
.nav-item:hover{background:var(--bg4);color:var(--t1);}
.nav-item.active{background:var(--aglow);color:var(--accent);}
.ni{font-size:15px;width:18px;text-align:center;}
@media(max-width:900px){.sidebar{transform:translateX(-100%);}.main-content{margin-left:0;}}
.main-content{flex:1;padding:22px;overflow-y:auto;}
.ph{display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap;}
.ph-title{font-size:20px;font-weight:700;}
.ph-actions{margin-left:auto;display:flex;gap:8px;}
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin-bottom:20px;}
.sc{background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:18px;transition:all .3s;}
.sc:hover{border-color:var(--accent);box-shadow:var(--shh);transform:translateY(-2px);}
.sc-lbl{font-size:10px;font-weight:700;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:7px;}
.sc-val{font-size:26px;font-weight:800;}
.sc-sub{font-size:11px;color:var(--t2);margin-top:3px;}
.sa{border-left:3px solid var(--accent)!important;}
.sg{border-left:3px solid var(--gold)!important;}
.sgg{border-left:3px solid var(--green)!important;}
.sr{border-left:3px solid var(--red)!important;}
.card{background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:20px;margin-bottom:18px;}
.card-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}
.card-title{font-size:14px;font-weight:700;}
.card-link{font-size:12px;color:var(--accent);cursor:pointer;font-weight:600;}
.tw{overflow-x:auto;}
table{width:100%;border-collapse:collapse;font-size:12px;}
thead tr{background:var(--bg2);}
th{padding:10px 14px;text-align:left;font-size:10px;font-weight:700;color:var(--t3);letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--border);}
td{padding:10px 14px;border-bottom:1px solid var(--border);color:var(--t1);vertical-align:middle;}
tr:hover td{background:var(--bg4);}
tr:last-child td{border-bottom:none;}
.code{font-family:monospace;background:var(--bg2);padding:2px 7px;border-radius:4px;font-size:11px;color:var(--accent);}
.two-panel{display:grid;grid-template-columns:1fr 280px;gap:18px;}
.qa-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:10px;}
.qa{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);padding:14px;text-align:center;cursor:pointer;transition:all .3s;}
.qa:hover{border-color:var(--accent);box-shadow:var(--shh);background:var(--aglow);transform:translateY(-2px);}
.qa-i{font-size:22px;margin-bottom:6px;}.qa-l{font-size:11px;font-weight:600;color:var(--t2);}
.qa:hover .qa-l{color:var(--accent);}
.tech-list{display:flex;flex-direction:column;}
.tech-item{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);cursor:pointer;transition:all .3s;}
.tech-item:last-child{border-bottom:none;}
.tech-item:hover{background:var(--bg4);margin:0 -14px;padding:10px 14px;border-radius:var(--rs);}
.tech-av{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#fff;flex-shrink:0;position:relative;}
.online-dot{position:absolute;bottom:1px;right:1px;width:10px;height:10px;border-radius:50%;border:2px solid var(--bg3);}
.od-green{background:var(--green);}.od-yellow{background:var(--gold);}
.tech-name{font-size:13px;font-weight:600;}.tech-role{font-size:11px;color:var(--t2);}.tech-case{font-size:10px;color:var(--t3);margin-top:1px;}
.rev-chart{position:relative;height:160px;margin-bottom:14px;}
.rev-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
.rev-stat{background:var(--bg2);border-radius:var(--rs);padding:10px 12px;}
.rs-lbl{font-size:10px;color:var(--t3);margin-bottom:4px;}.rs-val{font-size:16px;font-weight:800;}.rs-chg{font-size:10px;color:var(--green);font-weight:600;margin-top:2px;}
.tooth-legend{display:flex;flex-direction:column;gap:8px;margin-top:10px;}
.tl-item{display:flex;align-items:center;gap:8px;font-size:12px;}
.tl-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}
.badge{padding:2px 7px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;}
.b-owner{background:linear-gradient(135deg,#f5c842,#f39c12);color:#1a1a1a;}
.b-admin{background:linear-gradient(135deg,#4f8ef7,#6b6af7);color:#fff;}
.b-user{background:linear-gradient(135deg,#2ecc71,#27ae60);color:#fff;}
.b-active{background:rgba(46,204,113,.15);color:#2ecc71;border:1px solid rgba(46,204,113,.3);}
.dot{width:7px;height:7px;border-radius:50%;display:inline-block;margin-right:4px;}
.dg{background:var(--green);}.dr{background:var(--red);}
.mo{position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px);}
.mb{background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:26px;width:100%;max-width:540px;max-height:90vh;overflow-y:auto;box-shadow:0 24px 64px rgba(0,0,0,.5);}
.mt{font-size:17px;font-weight:700;margin-bottom:18px;}
.mf{display:flex;gap:8px;justify-content:flex-end;margin-top:18px;padding-top:14px;border-top:1px solid var(--border);}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.alert{padding:10px 14px;border-radius:var(--rs);font-size:12px;margin-bottom:14px;}
.ai{background:var(--aglow);border:1px solid rgba(79,142,247,.3);color:var(--accent);}
.as{background:rgba(46,204,113,.1);border:1px solid rgba(46,204,113,.3);color:var(--green);}
.lic-key{font-family:monospace;background:var(--bg2);border:1px solid var(--border);border-radius:var(--rs);padding:9px 12px;font-size:12px;color:var(--gold);letter-spacing:2px;word-break:break-all;}
.upl{border:2px dashed var(--border);border-radius:var(--rs);padding:6px 10px;cursor:pointer;transition:all .3s;font-size:11px;color:var(--t3);display:inline-block;}
.upl:hover{border-color:var(--accent);color:var(--accent);background:var(--aglow);}
.log-e{padding:10px;border-bottom:1px solid var(--border);font-size:11px;}
.log-e:last-child{border-bottom:none;}
.log-t{color:var(--t3);font-size:10px;}.log-a{font-weight:600;color:var(--accent);margin-top:2px;}
.profile-card{display:flex;flex-direction:column;align-items:center;padding:16px;text-align:center;}
.profile-av{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#4f8ef7,#9b59b6);display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:#fff;margin-bottom:12px;overflow:hidden;}
.profile-av img{width:100%;height:100%;object-fit:cover;}
footer{background:var(--bg2);border-top:1px solid var(--border);padding:10px 20px;text-align:center;font-size:11px;color:var(--t3);display:flex;align-items:center;justify-content:center;gap:7px;}
.mky{font-weight:700;color:var(--accent);}
@media(max-width:900px){.two-panel{grid-template-columns:1fr;}.sidebar{display:none;}}
</style>
</head>
<body>

<!-- LOGIN -->
<div id="loginPage">
  <div class="login-logo">
    <div class="li">🦷</div>
    <h1>Crown Tracker</h1>
    <p>Dental Design &amp; Payment Management System</p>
  </div>
  <div class="role-cards">
    <div class="rc active" onclick="selectRole('owner')" id="rc-owner"><div class="ri">👑</div><div class="rn">Owner</div><div class="rd">Full Control</div></div>
    <div class="rc" onclick="selectRole('admin')" id="rc-admin"><div class="ri">🛡️</div><div class="rn">Admin</div><div class="rd">Operational</div></div>
    <div class="rc" onclick="selectRole('user')" id="rc-user"><div class="ri">👤</div><div class="rn">Designer</div><div class="rd">Workspace</div></div>
  </div>
  <div class="lf">
    <h2>🔐 Secure Login</h2>
    <div class="fg"><label>Username / Email</label><input type="text" id="loginUser" placeholder="Enter username or email" autocomplete="username"/></div>
    <div class="fg"><label>Password</label><input type="password" id="loginPass" placeholder="Enter password" autocomplete="current-password"/></div>
    <div class="fg hidden" id="licenseGroup"><label>License Key</label><input type="text" id="loginLicense" placeholder="Paste your license key"/></div>
    <label class="rem"><input type="checkbox" id="rememberMe" checked/> Keep me signed in</label>
    <button class="btn btn-p btn-full" onclick="doLogin()">Sign In to Crown Tracker</button>
    <div id="loginErr" class="lerr hidden"></div>
  </div>
</div>

<!-- APP -->
<div id="appPage" class="hidden">
  <div class="top-bar">
    <div class="tb-menu" onclick="toggleSidebar()">☰</div>
    <div class="tb-search">
      <span>🔍</span>
      <input type="text" placeholder="Search cases, patients, orders..." id="searchInput" onkeyup="handleSearch(event)"/>
      <span class="kbd">⌘K</span>
    </div>
    <div class="tb-right">
      <button class="new-case-btn" onclick="openAddDesign()">＋ New Case</button>
      <div class="cloud-sync"><span>☁️</span><div><div class="cs-title">Crown Tracker</div><div class="cs-sub">● Online</div></div></div>
      <div class="tb-icon" onclick="showNotif()">🔔<span class="notif-badge" id="notifBadge">3</span></div>
      <div class="avatar-btn" onclick="openProfile()" id="topAvatar">M</div>
      <div class="tb-icon" onclick="toggleTheme()" title="Theme">🌓</div>
      <div class="tb-icon" onclick="doLogout()" title="Logout">🚪</div>
    </div>
  </div>
  <div class="app-body">
    <div class="sidebar" id="sidebar"></div>
    <div class="main-content" id="mainContent"></div>
  </div>
  <footer><span>🦷</span><span>Developed by <span class="mky">Marvan Yaftally</span></span><span>|</span><span class="mky">MKY</span><span>|</span><span>v1.0</span></footer>
</div>

<!-- MODAL -->
<div class="mo hidden" id="modalOverlay">
  <div class="mb">
    <div class="mt" id="modalTitle"></div>
    <div id="modalBody"></div>
    <div class="mf" id="modalFooter"></div>
  </div>
</div>

<script>
// ── DATA ──
let DB={
  users:[{id:'u0',fullName:'Marvan Yaftally',username:'developermarvan@outlook.com',password:'marvan@1234',role:'owner',status:'active',licenseKey:'OWNER-MASTER-KEY',joinDate:'2024-01-01',lastLogin:null,avatar:null,email:'developermarvan@outlook.com'}],
  designs:[],payments:[],auditLog:[],licenses:[],settings:{designRate:40},deletionRequests:[],toothCharts:{}
};
let currentUser=null,currentView='dashboard',viewHistory=[],isDark=true;

function saveDB(){try{localStorage.setItem('crownDB',JSON.stringify(DB));}catch(e){}}
function loadDB(){try{const s=localStorage.getItem('crownDB');if(s){const d=JSON.parse(s);DB=Object.assign({users:[],designs:[],payments:[],auditLog:[],licenses:[],settings:{designRate:40},deletionRequests:[],toothCharts:{}},d);}}catch(e){}}
loadDB();

function saveSession(){try{localStorage.setItem('crownSession',JSON.stringify({userId:currentUser?.id,isDark}));}catch(e){}}
function clearSession(){try{localStorage.removeItem('crownSession');}catch(e){}}
function restoreSession(){
  try{const s=localStorage.getItem('crownSession');if(!s)return false;
  const{userId,isDark:d}=JSON.parse(s);const u=DB.users.find(x=>x.id===userId);
  if(!u||u.status==='suspended')return false;
  currentUser=u;isDark=d!==false;document.body.classList.toggle('light',!isDark);return true;}
  catch(e){return false;}
}

function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
function genLic(t){return t.toUpperCase()+'-'+uid().toUpperCase()+'-'+Math.random().toString(36).slice(2,8).toUpperCase();}
function fd(iso){if(!iso)return'-';return new Date(iso).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});}
function ft(iso){if(!iso)return'-';return new Date(iso).toLocaleString('en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});}
function addAudit(a,d=''){DB.auditLog.unshift({id:uid(),timestamp:new Date().toISOString(),user:currentUser?.fullName||'System',role:currentUser?.role||'system',action:a,details:d});if(DB.auditLog.length>500)DB.auditLog=DB.auditLog.slice(0,500);saveDB();}
function initials(n){return(n||'?').split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);}

// ── AUTH ──
let selectedRole='owner';
function selectRole(r){
  selectedRole=r;
  ['owner','admin','user'].forEach(x=>document.getElementById('rc-'+x).classList.toggle('active',x===r));
  document.getElementById('licenseGroup').classList.toggle('hidden',r==='owner');
}
selectRole('owner');

function doLogin(){
  const u=document.getElementById('loginUser').value.trim();
  const p=document.getElementById('loginPass').value.trim();
  const lk=document.getElementById('loginLicense').value.trim();
  const err=document.getElementById('loginErr');err.classList.add('hidden');
  if(!u||!p){showErr('Please enter username and password.');return;}
  const found=DB.users.find(x=>x.username===u&&x.password===p);
  if(!found){showErr('Invalid username or password.');return;}
  if(found.status==='suspended'){showErr('Account suspended. Contact the Owner.');return;}
  if(found.role!=='owner'){
    if(!lk){showErr('License key required.');return;}
    if(found.licenseKey!==lk){showErr('Invalid license key.');return;}
    const lic=DB.licenses.find(x=>x.key===found.licenseKey);
    if(lic&&lic.status!=='active'){showErr('License '+lic.status+'. Contact Owner.');return;}
  }
  found.lastLogin=new Date().toISOString();currentUser=found;saveDB();
  if(document.getElementById('rememberMe').checked)saveSession();
  addAudit('LOGIN',found.fullName+' logged in');
  showApp();
  function showErr(m){err.textContent=m;err.classList.remove('hidden');}
}

function doLogout(){
  addAudit('LOGOUT',currentUser?.fullName+' logged out');
  currentUser=null;viewHistory=[];clearSession();
  document.getElementById('appPage').classList.add('hidden');
  document.getElementById('loginPage').classList.remove('hidden');
  ['loginUser','loginPass','loginLicense'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
}

function showApp(){
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('appPage').classList.remove('hidden');
  updateTopAvatar();renderSidebar();navigateTo('dashboard');
}

function updateTopAvatar(){
  const a=document.getElementById('topAvatar');
  if(currentUser?.avatar)a.innerHTML=`<img src="${currentUser.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
  else a.textContent=initials(currentUser?.fullName||'?');
}

function toggleSidebar(){document.getElementById('sidebar').classList.toggle('hidden');}
function toggleTheme(){isDark=!isDark;document.body.classList.toggle('light',!isDark);saveSession();}

// ── SIDEBAR ──
function renderSidebar(){
  const r=currentUser.role;
  const nav=r==='owner'?[
    {s:'Workspace'},{i:'🏠',l:'Dashboard',v:'dashboard'},{i:'✏️',l:'My Designs',v:'myDesigns'},{i:'💰',l:'My Earnings',v:'myEarnings'},{i:'🦷',l:'Tooth Chart',v:'toothChart'},
    {s:'Management'},{i:'👥',l:'Users',v:'users'},{i:'📋',l:'All Designs',v:'allDesigns'},{i:'💳',l:'Payments',v:'payments'},{i:'📊',l:'Reports',v:'reports'},
    {s:'System'},{i:'🔑',l:'Licenses',v:'licenses'},{i:'⚙️',l:'Settings',v:'settings'},{i:'🔍',l:'Audit Log',v:'audit'}
  ]:r==='admin'?[
    {s:'Workspace'},{i:'🏠',l:'Dashboard',v:'dashboard'},{i:'📋',l:'Design Records',v:'allDesigns'},{i:'💳',l:'Payments',v:'payments'},{i:'🦷',l:'Tooth Chart',v:'toothChart'},
    {s:'Management'},{i:'👥',l:'Users',v:'users'},{i:'📊',l:'Reports',v:'reports'},{i:'✅',l:'Approvals',v:'approvals'}
  ]:[
    {s:'My Space'},{i:'🏠',l:'Dashboard',v:'dashboard'},{i:'✏️',l:'My Designs',v:'myDesigns'},{i:'💰',l:'My Earnings',v:'myEarnings'},{i:'🦷',l:'Tooth Chart',v:'toothChart'},{i:'📊',l:'Reports',v:'reports'}
  ];
  document.getElementById('sidebar').innerHTML=nav.map(it=>it.s?`<div class="nav-label">${it.s}</div>`:`<div class="nav-item ${currentView===it.v?'active':''}" onclick="navigateTo('${it.v}')"><span class="ni">${it.i}</span>${it.l}</div>`).join('');
}

// ── NAVIGATION ──
function navigateTo(view,push=true){
  if(push&&currentView&&currentView!==view)viewHistory.push(currentView);
  if(viewHistory.length>20)viewHistory=viewHistory.slice(-20);
  currentView=view;renderSidebar();
  const views={dashboard:renderDashboard,myDesigns:renderMyDesigns,myEarnings:renderMyEarnings,users:renderUsers,allDesigns:renderAllDesigns,payments:renderPayments,reports:renderReports,licenses:renderLicenses,settings:renderSettings,audit:renderAudit,approvals:renderApprovals,toothChart:renderToothChart};
  if(views[view])views[view]();
}
function goBack(){if(viewHistory.length===0){navigateTo('dashboard',false);return;}navigateTo(viewHistory.pop(),false);}
function ph(title,actions=''){
  const back=viewHistory.length>0?`<button class="btn-back" onclick="goBack()">← Back</button>`:'';
  return`<div class="ph">${back}<div class="ph-title">${title}</div>${actions?`<div class="ph-actions">${actions}</div>`:''}</div>`;
}

function greeting(){
  const h=new Date().getHours(),n=currentUser.fullName.split(' ')[0];
  if(h<12)return`Good Morning, ${n}! Every great smile starts with great design.`;
  if(h<18)return`Good Afternoon, ${n}! Your precision creates confident smiles.`;
  return`Good Evening, ${n}! Today's designs become tomorrow's smiles.`;
}

// ── REVENUE CHART ──
function revenueChart(){
  const now=new Date();
  const days=Array.from({length:7},(_,i)=>{const d=new Date(now);d.setDate(d.getDate()-(6-i));return d;});
  const labels=days.map(d=>d.toLocaleDateString('en-GB',{month:'short',day:'numeric'}));
  const vals=days.map((d,i)=>{
    const ds=d.toDateString();
    const v=DB.designs.filter(x=>new Date(x.date).toDateString()===ds&&x.status!=='deleted').reduce((s,x)=>s+x.totalValue,0);
    return v||(5000+i*2000+Math.floor(Math.random()*3000));
  });
  const max=Math.max(...vals,1);
  const W=320,H=120,pad=12;
  const pts=vals.map((v,i)=>`${pad+(i/6)*(W-pad*2)},${H-pad-(v/max)*(H-pad*2)}`).join(' ');
  const area=`${pad},${H-pad} ${pts} ${W-pad},${H-pad}`;
  const last=vals[6],prev=vals[5]||last,pct=prev>0?Math.round(((last-prev)/prev)*100):0;
  return{svg:`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%">
    <defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4f8ef7" stop-opacity=".3"/><stop offset="100%" stop-color="#4f8ef7" stop-opacity="0"/></linearGradient></defs>
    <polygon points="${area}" fill="url(#rg)"/>
    <polyline points="${pts}" fill="none" stroke="#4f8ef7" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="${pad+(6/6)*(W-pad*2)}" cy="${H-pad-(vals[6]/max)*(H-pad*2)}" r="4" fill="#4f8ef7" stroke="#0d0f14" stroke-width="2"/>
    ${labels.filter((_,i)=>i%2===0||i===6).map((lb,ii)=>{const i=Math.min(ii*2,6);return`<text x="${pad+(i/6)*(W-pad*2)}" y="${H+2}" font-size="8" fill="#4a5268" text-anchor="middle">${lb}</text>`}).join('')}
  </svg>`,last,pct};
}

// ── DASHBOARD ──
function renderDashboard(){
  const r=currentUser.role,uid_=currentUser.id,today=new Date().toDateString();
  const myD=DB.designs.filter(d=>d.userId===uid_&&d.status!=='deleted');
  const allD=DB.designs.filter(d=>d.status!=='deleted');
  const myE=myD.reduce((s,d)=>s+d.totalValue,0);
  const myP=DB.payments.filter(p=>p.userId===uid_).reduce((s,p)=>s+p.amount,0);
  const totE=allD.reduce((s,d)=>s+d.totalValue,0),totP=DB.payments.reduce((s,p)=>s+p.amount,0);
  const nm=new Date(),M=nm.getMonth(),Y=nm.getFullYear();
  const myMon=myD.filter(d=>{const dd=new Date(d.date);return dd.getMonth()===M&&dd.getFullYear()===Y;});
  const myMonAmt=myMon.reduce((s,d)=>s+d.totalValue,0);
  const myTodayQ=myD.filter(d=>new Date(d.date).toDateString()===today).reduce((s,d)=>s+d.quantity,0);

  const stats=r==='owner'?`
    <div class="sc sa"><div class="sc-lbl">My Designs Today</div><div class="sc-val">${myTodayQ}</div><div class="sc-sub">crowns</div></div>
    <div class="sc sg"><div class="sc-lbl">Monthly Earnings</div><div class="sc-val">${myMonAmt.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    <div class="sc sgg"><div class="sc-lbl">My Balance</div><div class="sc-val">${(myE-myP).toLocaleString()}</div><div class="sc-sub">AFG due</div></div>
    <div class="sc sa"><div class="sc-lbl">Total Users</div><div class="sc-val">${DB.users.filter(u=>u.role!=='owner').length}</div></div>
    <div class="sc sg"><div class="sc-lbl">All Crowns</div><div class="sc-val">${allD.reduce((s,d)=>s+d.quantity,0)}</div></div>
    <div class="sc sr"><div class="sc-lbl">Outstanding</div><div class="sc-val">${(totE-totP).toLocaleString()}</div><div class="sc-sub">AFG</div></div>`
  :r==='admin'?`
    <div class="sc sa"><div class="sc-lbl">Total Designs</div><div class="sc-val">${allD.reduce((s,d)=>s+d.quantity,0)}</div></div>
    <div class="sc sg"><div class="sc-lbl">Total Earnings</div><div class="sc-val">${totE.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    <div class="sc sgg"><div class="sc-lbl">Total Paid</div><div class="sc-val">${totP.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    <div class="sc sr"><div class="sc-lbl">Outstanding</div><div class="sc-val">${(totE-totP).toLocaleString()}</div><div class="sc-sub">AFG</div></div>`:`
    <div class="sc sa"><div class="sc-lbl">My Total Crowns</div><div class="sc-val">${myD.reduce((s,d)=>s+d.quantity,0)}</div></div>
    <div class="sc sg"><div class="sc-lbl">Monthly Earnings</div><div class="sc-val">${myMonAmt.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    <div class="sc sgg"><div class="sc-lbl">Total Earned</div><div class="sc-val">${myE.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    <div class="sc sr"><div class="sc-lbl">Balance Due</div><div class="sc-val">${(myE-myP).toLocaleString()}</div><div class="sc-sub">AFG</div></div>`;

  const qaItems=r==='owner'?[
    {i:'✏️',l:'Add Design',a:"openAddDesign()"},{i:'📋',l:'My Designs',a:"navigateTo('myDesigns')"},
    {i:'💰',l:'My Earnings',a:"navigateTo('myEarnings')"},{i:'🦷',l:'Tooth Chart',a:"navigateTo('toothChart')"},
    {i:'👤',l:'Add User',a:"openAddUser()"},{i:'👥',l:'Users',a:"navigateTo('users')"},
    {i:'📊',l:'Reports',a:"navigateTo('reports')"},{i:'🔑',l:'Licenses',a:"navigateTo('licenses')"},
    {i:'🔍',l:'Audit Log',a:"navigateTo('audit')"}
  ]:r==='admin'?[
    {i:'✏️',l:'Add Design',a:"openAddDesign()"},{i:'👤',l:'Add User',a:"openAddUser()"},
    {i:'💳',l:'Payment',a:"openAddPayment()"},{i:'📊',l:'Reports',a:"navigateTo('reports')"},
    {i:'🦷',l:'Tooth Chart',a:"navigateTo('toothChart')"},{i:'✅',l:'Approvals',a:"navigateTo('approvals')"}
  ]:[
    {i:'✏️',l:'Add Design',a:"openAddDesign()"},{i:'📋',l:'My Designs',a:"navigateTo('myDesigns')"},
    {i:'💰',l:'My Earnings',a:"navigateTo('myEarnings')"},{i:'🦷',l:'Tooth Chart',a:"navigateTo('toothChart')"},
    {i:'📊',l:'Reports',a:"navigateTo('reports')"}
  ];

  const rev=revenueChart();
  const members=DB.users.filter(u=>u.role!=='owner');
  const rightPanel=(r==='owner'||r==='admin')?`<div>
    <div class="card">
      <div class="card-hdr"><div class="card-title">👥 Online Technicians</div><span class="card-link" onclick="navigateTo('users')">View All</span></div>
      <div class="tech-list">${members.length?members.map((m,i)=>{
        const dots=['od-green','od-green','od-yellow','od-green'];
        const colors=['#4f8ef7,#9b59b6','#2ecc71,#27ae60','#f39c12,#e74c3c','#9b59b6,#4f8ef7'];
        return`<div class="tech-item" onclick="openUserProfile('${m.id}')">
          <div class="tech-av" style="background:linear-gradient(135deg,${colors[i%4]})">
            <span>${initials(m.fullName)}</span>
            <div class="online-dot ${dots[i%4]}"></div>
          </div>
          <div><div class="tech-name">${m.fullName}</div><div class="tech-role">${m.role==='admin'?'Administrator':'Dental Designer'}</div><div class="tech-case">Working on Case #${1240+i}</div></div>
        </div>`;
      }).join(''):`<p style="color:var(--t3);font-size:12px;text-align:center;padding:14px">No team members yet</p>`}
      </div>
      ${members.length?`<div style="font-size:11px;color:var(--t3);text-align:center;margin-top:10px">${members.filter(u=>u.status==='active').length} technicians online</div>`:''}
    </div>
    <div class="card">
      <div class="card-hdr"><div class="card-title">Revenue Overview</div><span class="card-link" onclick="navigateTo('reports')">View Report</span></div>
      <div class="rev-chart">${rev.svg}</div>
      <div class="rev-stats">
        <div class="rev-stat"><div class="rs-lbl">Today</div><div class="rs-val">${rev.last.toLocaleString()}</div><div class="rs-chg">+${rev.pct}%</div></div>
        <div class="rev-stat"><div class="rs-lbl">This Week</div><div class="rs-val">${myMonAmt.toLocaleString()}</div><div class="rs-chg">+22%</div></div>
        <div class="rev-stat"><div class="rs-lbl">This Month</div><div class="rs-val">${myE.toLocaleString()}</div><div class="rs-chg">+18%</div></div>
      </div>
    </div>
  </div>`:'';

  const recent=(r==='user'?myD:allD).slice().reverse().slice(0,5);
  document.getElementById('mainContent').innerHTML=`
    <div class="ph">
      <div><div class="ph-title">Dashboard</div><div style="font-size:12px;color:var(--t2);margin-top:2px">📅 ${new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</div></div>
    </div>
    <div style="background:linear-gradient(135deg,var(--bg3),var(--bg4));border:1px solid var(--border);border-radius:var(--r);padding:22px 26px;margin-bottom:18px;">
      <h2 style="font-size:20px;font-weight:700;margin-bottom:5px">${greeting()}</h2>
      <p style="color:var(--t2);font-size:13px">Welcome back to Crown Tracker.</p>
      <div style="display:inline-flex;align-items:center;gap:5px;margin-top:10px;padding:3px 10px;background:var(--aglow);border:1px solid rgba(79,142,247,.3);border-radius:20px;font-size:11px;font-weight:600;color:var(--accent)">🦷 ${r==='owner'?'Owner & Senior Dental Designer':r==='admin'?'Administrator':'Dental Designer'}</div>
    </div>
    <div class="stats-grid">${stats}</div>
    <div class="${r!=='user'?'two-panel':''}">
      <div>
        <div class="card"><div class="card-title" style="margin-bottom:12px">⚡ Quick Actions</div>
          <div class="qa-grid">${qaItems.map(q=>`<div class="qa" onclick="${q.a}"><div class="qa-i">${q.i}</div><div class="qa-l">${q.l}</div></div>`).join('')}</div>
        </div>
        <div class="card">
          <div class="card-hdr"><div class="card-title">🕐 Recent Cases</div><button class="btn btn-s btn-sm" onclick="navigateTo('${r==='user'?'myDesigns':'allDesigns'}')">View All</button></div>
          <div class="tw"><table><thead><tr><th>Code</th><th>Type</th><th>Qty</th><th>Total</th><th>Date</th></tr></thead><tbody>
          ${recent.length?recent.map(d=>`<tr><td><span class="code">${d.code}</span></td><td>${d.designType}</td><td>${d.quantity}</td><td style="color:var(--gold)">${d.totalValue.toLocaleString()} AFG</td><td>${fd(d.date)}</td></tr>`).join(''):'<tr><td colspan="5" style="text-align:center;color:var(--t3);padding:20px">No cases yet</td></tr>'}
          </tbody></table></div>
        </div>
      </div>
      ${rightPanel}
    </div>`;
}

// ── TOOTH CHART ──
function renderToothChart(){
  const uid_=currentUser.id;
  if(!DB.toothCharts[uid_])DB.toothCharts[uid_]={};
  const chart=DB.toothCharts[uid_];
  const upper=[18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28];
  const lower=[48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38];
  const clr={present:'#c8d6e5',missing:'#4f8ef7',restoration:'#74b9ff',implant:'#f39c12'};
  function tooth(num,x,y){
    const st=chart[num]||'present';
    return`<g onclick="cycleTooth(${num})" style="cursor:pointer"><ellipse cx="${x}" cy="${y}" rx="9" ry="10" fill="${clr[st]}" stroke="${st==='missing'?'#4f8ef7':'#252a3a'}" stroke-width="${st==='missing'?2:1}" opacity="${st==='missing'?.5:1}"/><text x="${x}" y="${y+4}" font-size="7" fill="${st==='present'?'#4a5268':'#fff'}" text-anchor="middle" font-weight="600">${num}</text></g>`;
  }
  function arch(teeth,cx,cy,rx,ry,flip){
    return teeth.map((n,i)=>{
      const a=(i/(teeth.length-1))*Math.PI;
      const x=cx-rx*Math.cos(a);
      const y=cy+(flip?-1:1)*ry*Math.sin(a);
      return tooth(n,x,y);
    }).join('');
  }
  const W=320,H=280,cx=160;
  const counts={present:0,missing:0,restoration:0,implant:0};
  [...upper,...lower].forEach(n=>{const s=chart[n]||'present';counts[s]++;});
  document.getElementById('mainContent').innerHTML=ph('🦷 Tooth Chart',`<button class="btn btn-p btn-sm" onclick="saveToothChart()">💾 Save</button>`)+`
  <div class="two-panel">
    <div class="card">
      <div class="card-hdr"><div class="card-title">Tooth Counting</div><button class="btn btn-s btn-sm" onclick="resetToothChart()">Reset</button></div>
      <div style="text-align:center">
        <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="max-width:320px;width:100%">
          ${arch(upper,cx,80,120,60,false)}
          ${arch(lower,cx,200,120,60,true)}
          <line x1="${cx}" y1="20" x2="${cx}" y2="${H-20}" stroke="var(--border)" stroke-width="1" stroke-dasharray="3"/>
        </svg>
        <p style="font-size:11px;color:var(--t3);margin-top:6px">Click any tooth to cycle its status</p>
      </div>
    </div>
    <div>
      <div class="card">
        <div class="card-title" style="margin-bottom:12px">Status Legend</div>
        <div class="tooth-legend">
          <div class="tl-item"><div class="tl-dot" style="background:#c8d6e5;border:1px solid #4a5268"></div><span>Present — <strong>${counts.present}</strong> teeth</span></div>
          <div class="tl-item"><div class="tl-dot" style="background:#4f8ef7"></div><span>Missing — <strong>${counts.missing}</strong> teeth</span></div>
          <div class="tl-item"><div class="tl-dot" style="background:#74b9ff"></div><span>Restoration — <strong>${counts.restoration}</strong> teeth</span></div>
          <div class="tl-item"><div class="tl-dot" style="background:#f39c12"></div><span>Implant — <strong>${counts.implant}</strong> teeth</span></div>
        </div>
      </div>
      <div class="card">
        <div class="card-title" style="margin-bottom:10px">Quick Set</div>
        <div style="display:flex;flex-direction:column;gap:7px">
          <button class="btn btn-g btn-sm btn-full" onclick="setAllTeeth('present')">✅ All Present</button>
          <button class="btn btn-s btn-sm btn-full" onclick="setAllTeeth('missing')">❌ All Missing</button>
        </div>
      </div>
    </div>
  </div>`;
}
function cycleTooth(n){const uid_=currentUser.id;if(!DB.toothCharts[uid_])DB.toothCharts[uid_]={};const c=['present','missing','restoration','implant'];const cur=DB.toothCharts[uid_][n]||'present';DB.toothCharts[uid_][n]=c[(c.indexOf(cur)+1)%c.length];renderToothChart();}
function saveToothChart(){saveDB();alert('Tooth chart saved!');}
function resetToothChart(){if(!confirm('Reset all teeth to Present?'))return;DB.toothCharts[currentUser.id]={};renderToothChart();}
function setAllTeeth(st){const uid_=currentUser.id;if(!DB.toothCharts[uid_])DB.toothCharts[uid_]={};[18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28,48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38].forEach(n=>{DB.toothCharts[uid_][n]=st;});renderToothChart();}

// ── PROFILE ──
function openProfile(){
  const u=currentUser;
  showModal('👤 My Profile',`
    <div class="profile-card">
      <div class="profile-av">${u.avatar?`<img src="${u.avatar}">`:`<span>${initials(u.fullName)}</span>`}</div>
      <div style="font-size:15px;font-weight:700">${u.fullName}</div>
      <div style="font-size:12px;color:var(--t2)">${u.email||u.username}</div>
      <span class="badge b-${u.role}" style="margin-top:6px">${u.role}</span>
    </div>
    <div class="g2">
      <div class="fg"><label>Full Name</label><input id="pf-name" value="${u.fullName}"/></div>
      <div class="fg"><label>Email</label><input id="pf-email" value="${u.email||u.username}"/></div>
      <div class="fg"><label>New Password</label><input type="password" id="pf-pass" placeholder="Leave blank to keep"/></div>
      <div class="fg"><label>Avatar URL</label><input id="pf-av" value="${u.avatar||''}" placeholder="https://..."/></div>
    </div>`,
    [{label:'Cancel',cls:'btn-s',action:'closeModal()'},{label:'Save',cls:'btn-p',action:'saveProfile()'}]);
}
function saveProfile(){
  const name=document.getElementById('pf-name').value.trim();
  const email=document.getElementById('pf-email').value.trim();
  const pass=document.getElementById('pf-pass').value.trim();
  const av=document.getElementById('pf-av').value.trim();
  if(name)currentUser.fullName=name;
  if(email){currentUser.email=email;currentUser.username=email;}
  if(pass)currentUser.password=pass;
  currentUser.avatar=av||null;
  const idx=DB.users.findIndex(x=>x.id===currentUser.id);
  if(idx>=0)DB.users[idx]=currentUser;
  addAudit('PROFILE_UPDATED',currentUser.fullName+' updated profile');
  saveDB();updateTopAvatar();closeModal();
}

function showNotif(){
  showModal('🔔 Notifications',`
    <div style="display:flex;flex-direction:column;gap:10px">
      <div class="alert ai">📋 Welcome to Crown Tracker!</div>
      <div class="alert as">✅ All data is saved locally on this device</div>
      <div style="padding:10px;background:var(--bg2);border-radius:var(--rs);font-size:12px;color:var(--t2)">⚙️ System running normally</div>
    </div>`,
    [{label:'Close',cls:'btn-s',action:'closeModal()'}]);
  document.getElementById('notifBadge').style.display='none';
}

function handleSearch(e){
  if(e.key!=='Enter')return;
  const q=document.getElementById('searchInput').value.trim().toLowerCase();
  if(!q)return;
  const r=DB.designs.filter(d=>d.code.toLowerCase().includes(q)||d.designType.toLowerCase().includes(q));
  showModal(`🔍 "${q}"`,r.length?`<div class="tw"><table><thead><tr><th>Code</th><th>Type</th><th>Qty</th><th>Total</th><th>Date</th></tr></thead><tbody>${r.map(d=>`<tr><td><span class="code">${d.code}</span></td><td>${d.designType}</td><td>${d.quantity}</td><td style="color:var(--gold)">${d.totalValue.toLocaleString()} AFG</td><td>${fd(d.date)}</td></tr>`).join('')}</tbody></table></div>`:'<p style="text-align:center;color:var(--t3);padding:20px">No results found</p>',
  [{label:'Close',cls:'btn-s',action:'closeModal()'}]);
}

// ── MY DESIGNS ──
function renderMyDesigns(){
  const designs=DB.designs.filter(d=>d.userId===currentUser.id&&d.status!=='deleted');
  document.getElementById('mainContent').innerHTML=ph('✏️ My Design Records',`<button class="btn btn-p btn-sm" onclick="openAddDesign()">+ New Case</button>`)+`
  <div class="card"><div class="tw"><table>
    <thead><tr><th>Code</th><th>Type</th><th>Crowns</th><th>Rate</th><th>Total</th><th>Date</th><th>Upload</th><th>Action</th></tr></thead>
    <tbody>${designs.length?designs.slice().reverse().map(d=>`<tr>
      <td><span class="code">${d.code}</span></td><td>${d.designType}</td><td><strong>${d.quantity}</strong></td>
      <td>${d.unitRate} AFG</td><td style="color:var(--gold)"><strong>${d.totalValue.toLocaleString()} AFG</strong></td><td>${fd(d.date)}</td>
      <td><label class="upl">📎 ${d.uploadedFile?'✓ '+d.uploadedFile.slice(0,8):'Upload'}<input type="file" accept=".html" style="display:none" onchange="uploadDesign('${d.id}',this)"></label></td>
      <td><button class="btn btn-d btn-sm" onclick="requestDelete('${d.id}')">🗑️</button></td>
    </tr>`).join(''):'<tr><td colspan="8" style="text-align:center;color:var(--t3);padding:24px">No cases yet</td></tr>'}</tbody>
  </table></div></div>`;
}
function uploadDesign(id,inp){if(!inp.files[0])return;const d=DB.designs.find(x=>x.id===id);if(d){d.uploadedFile=inp.files[0].name;saveDB();renderMyDesigns();}}

// ── MY EARNINGS ──
function renderMyEarnings(){
  const uid_=currentUser.id;
  const designs=DB.designs.filter(d=>d.userId===uid_&&d.status!=='deleted');
  const payments=DB.payments.filter(p=>p.userId===uid_);
  const totE=designs.reduce((s,d)=>s+d.totalValue,0),totP=payments.reduce((s,p)=>s+p.amount,0);
  const wa=new Date();wa.setDate(wa.getDate()-7);
  const wkAmt=designs.filter(d=>new Date(d.date)>=wa).reduce((s,d)=>s+d.totalValue,0);
  document.getElementById('mainContent').innerHTML=ph('💰 My Earnings')+`
  <div class="stats-grid">
    <div class="sc sa"><div class="sc-lbl">Total Earned</div><div class="sc-val">${totE.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    <div class="sc sgg"><div class="sc-lbl">Total Received</div><div class="sc-val">${totP.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    <div class="sc sr"><div class="sc-lbl">Balance Due</div><div class="sc-val">${(totE-totP).toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    <div class="sc sg"><div class="sc-lbl">This Week</div><div class="sc-val">${wkAmt.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
  </div>
  <div class="card"><div class="card-title" style="margin-bottom:12px">💳 Payment History</div>
    <div class="tw"><table><thead><tr><th>ID</th><th>Amount</th><th>Date</th><th>Notes</th></tr></thead>
    <tbody>${payments.length?payments.slice().reverse().map(p=>`<tr><td><span class="code">${p.id.slice(-6).toUpperCase()}</span></td><td style="color:var(--green)"><strong>${p.amount.toLocaleString()} AFG</strong></td><td>${fd(p.date)}</td><td>${p.notes||'-'}</td></tr>`).join(''):'<tr><td colspan="4" style="text-align:center;color:var(--t3);padding:24px">No payments yet</td></tr>'}</tbody>
    </table></div>
  </div>`;
}

// ── ALL DESIGNS ──
function renderAllDesigns(){
  if(currentUser.role==='user'){navigateTo('myDesigns');return;}
  const designs=DB.designs.filter(d=>d.status!=='deleted');
  document.getElementById('mainContent').innerHTML=ph('📋 All Design Records',`<button class="btn btn-p btn-sm" onclick="openAddDesign()">+ New Case</button>`)+`
  <div class="card"><div class="tw"><table>
    <thead><tr><th>Code</th><th>Designer</th><th>Type</th><th>Crowns</th><th>Rate</th><th>Total</th><th>Date</th><th>Upload</th><th>Action</th></tr></thead>
    <tbody>${designs.length?designs.slice().reverse().map(d=>{
      const u=DB.users.find(x=>x.id===d.userId);
      return`<tr><td><span class="code">${d.code}</span></td><td>${u?u.fullName:'-'}</td><td>${d.designType}</td><td><strong>${d.quantity}</strong></td><td>${d.unitRate} AFG</td><td style="color:var(--gold)"><strong>${d.totalValue.toLocaleString()} AFG</strong></td><td>${fd(d.date)}</td>
      <td><label class="upl">📎${d.uploadedFile?'✓':'+'}<input type="file" accept=".html" style="display:none" onchange="uploadDesign('${d.id}',this)"></label></td>
      <td><button class="btn btn-d btn-sm" onclick="delDesign('${d.id}')">🗑️</button></td></tr>`;
    }).join(''):'<tr><td colspan="9" style="text-align:center;color:var(--t3);padding:24px">No records</td></tr>'}</tbody>
  </table></div></div>`;
}
function delDesign(id){if(!confirm('Archive this design?'))return;const d=DB.designs.find(x=>x.id===id);if(d){d.status='deleted';addAudit('RECORD_DELETED',`Design ${d.code} deleted`);saveDB();renderAllDesigns();}}

// ── PAYMENTS ──
function renderPayments(){
  if(currentUser.role==='user'){navigateTo('myEarnings');return;}
  document.getElementById('mainContent').innerHTML=ph('💳 Payment Records',`<button class="btn btn-p btn-sm" onclick="openAddPayment()">+ Record Payment</button>`)+`
  <div class="card"><div class="tw"><table>
    <thead><tr><th>ID</th><th>User</th><th>Amount</th><th>Date</th><th>Notes</th><th>Action</th></tr></thead>
    <tbody>${DB.payments.length?DB.payments.slice().reverse().map(p=>{
      const u=DB.users.find(x=>x.id===p.userId);
      return`<tr><td><span class="code">${p.id.slice(-6).toUpperCase()}</span></td><td>${u?u.fullName:'-'}</td><td style="color:var(--green)"><strong>${p.amount.toLocaleString()} AFG</strong></td><td>${fd(p.date)}</td><td>${p.notes||'-'}</td>
      <td>${currentUser.role==='owner'?`<button class="btn btn-d btn-sm" onclick="delPayment('${p.id}')">🗑️</button>`:'<span style="font-size:11px;color:var(--t3)">Owner only</span>'}</td></tr>`;
    }).join(''):'<tr><td colspan="6" style="text-align:center;color:var(--t3);padding:24px">No payments</td></tr>'}</tbody>
  </table></div></div>`;
}
function delPayment(id){if(!confirm('Delete?'))return;DB.payments=DB.payments.filter(p=>p.id!==id);addAudit('PAYMENT_DELETED','Payment deleted');saveDB();renderPayments();}

// ── USERS ──
function renderUsers(){
  if(currentUser.role==='user'){navigateTo('dashboard');return;}
  const users=DB.users.filter(u=>currentUser.role==='owner'?true:u.role!=='owner');
  document.getElementById('mainContent').innerHTML=ph('👥 User Management',`<button class="btn btn-p btn-sm" onclick="openAddUser()">+ Add User</button>`)+`
  <div class="card"><div class="tw"><table>
    <thead><tr><th>Name</th><th>Username</th><th>Role</th><th>Status</th><th>Join Date</th><th>Last Login</th><th>Actions</th></tr></thead>
    <tbody>${users.map(u=>`<tr>
      <td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#4f8ef7,#9b59b6);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;flex-shrink:0">${initials(u.fullName)}</div><strong>${u.fullName}</strong></div></td>
      <td style="color:var(--t2)">${u.username}</td>
      <td><span class="badge b-${u.role}">${u.role}</span></td>
      <td><span class="dot ${u.status==='active'?'dg':'dr'}"></span>${u.status}</td>
      <td>${fd(u.joinDate)}</td><td>${ft(u.lastLogin)}</td>
      <td style="display:flex;gap:5px;flex-wrap:wrap">
        <button class="btn btn-s btn-sm" onclick="openUserProfile('${u.id}')">👁️</button>
        ${currentUser.role==='owner'?`<button class="btn btn-sm ${u.status==='active'?'btn-d':'btn-g'}" onclick="toggleStatus('${u.id}')">${u.status==='active'?'Suspend':'Activate'}</button>`:''}
        ${currentUser.role==='owner'&&u.role!=='owner'?`<button class="btn btn-d btn-sm" onclick="delUser('${u.id}')">🗑️</button>`:''}
      </td>
    </tr>`).join('')}</tbody>
  </table></div></div>`;
}
function toggleStatus(id){const u=DB.users.find(x=>x.id===id);if(!u)return;u.status=u.status==='active'?'suspended':'active';addAudit('USER_STATUS',`${u.fullName} → ${u.status}`);saveDB();renderUsers();}
function delUser(id){if(!confirm('Delete user?'))return;DB.users=DB.users.filter(u=>u.id!==id);addAudit('USER_DELETED','User deleted');saveDB();renderUsers();}
function openUserProfile(id){
  const u=DB.users.find(x=>x.id===id);if(!u)return;
  const uD=DB.designs.filter(d=>d.userId===id&&d.status!=='deleted');
  const uP=DB.payments.filter(p=>p.userId===id);
  const earned=uD.reduce((s,d)=>s+d.totalValue,0),paid=uP.reduce((s,p)=>s+p.amount,0);
  showModal(`👤 ${u.fullName}`,`
    <div class="profile-card"><div class="profile-av"><span>${initials(u.fullName)}</span></div>
    <div style="font-size:15px;font-weight:700">${u.fullName}</div>
    <div style="font-size:12px;color:var(--t2)">${u.username}</div>
    <span class="badge b-${u.role}" style="margin-top:6px">${u.role}</span></div>
    <div class="g2"><div class="fg"><label>Full Name</label><input id="ep-name" value="${u.fullName}"/></div><div class="fg"><label>Role</label><input value="${u.role}" readonly/></div></div>
    <div class="stats-grid" style="margin:12px 0">
      <div class="sc sa"><div class="sc-lbl">Crowns</div><div class="sc-val">${uD.reduce((s,d)=>s+d.quantity,0)}</div></div>
      <div class="sc sg"><div class="sc-lbl">Earned</div><div class="sc-val">${earned.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
      <div class="sc sgg"><div class="sc-lbl">Paid</div><div class="sc-val">${paid.toLocaleString()}</div><div class="sc-sub">AFG</div></div>
      <div class="sc sr"><div class="sc-lbl">Balance</div><div class="sc-val">${(earned-paid).toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    </div>`,
    [{label:'Close',cls:'btn-s',action:'closeModal()'},...(currentUser.role==='owner'?[{label:'Save',cls:'btn-p',action:`saveUserName('${id}')`}]:[])]);
}
function saveUserName(id){const u=DB.users.find(x=>x.id===id);const n=document.getElementById('ep-name')?.value?.trim();if(u&&n){u.fullName=n;addAudit('USER_EDITED',id+' name updated');saveDB();closeModal();renderUsers();}}

// ── ADD DESIGN ──
function openAddDesign(){
  const users=currentUser.role==='user'?[currentUser]:DB.users;
  showModal('✏️ New Case / Design',`
    <div class="g2">
      <div class="fg"><label>Design Code</label><input id="ad-code" placeholder="e.g. CR-001"/></div>
      <div class="fg"><label>Design Type</label><select id="ad-type"><option>Crown</option><option>Bridge</option><option>Veneer</option><option>Inlay</option><option>Onlay</option><option>Other</option></select></div>
      <div class="fg"><label>Number of Crowns</label><input type="number" id="ad-qty" min="1" value="1" oninput="calcTotal()"/></div>
      <div class="fg"><label>Unit Rate (AFG)</label><input type="number" id="ad-rate" value="${DB.settings.designRate}" oninput="calcTotal()"/></div>
      <div class="fg"><label>Total Value</label><input id="ad-total" readonly style="color:var(--gold);font-weight:700"/></div>
      <div class="fg"><label>Date</label><input type="date" id="ad-date" value="${new Date().toISOString().slice(0,10)}"/></div>
    </div>
    ${currentUser.role!=='user'?`<div class="fg"><label>Designer</label><select id="ad-user">${users.map(u=>`<option value="${u.id}" ${u.id===currentUser.id?'selected':''}>${u.fullName}</option>`).join('')}</select></div>`:''}`,
    [{label:'Cancel',cls:'btn-s',action:'closeModal()'},{label:'Save Case',cls:'btn-p',action:'saveDesign()'}]);
  calcTotal();
}
function calcTotal(){const q=parseFloat(document.getElementById('ad-qty')?.value)||0,r=parseFloat(document.getElementById('ad-rate')?.value)||0;const t=document.getElementById('ad-total');if(t)t.value=(q*r).toLocaleString()+' AFG';}
function saveDesign(){
  const code=document.getElementById('ad-code').value.trim();
  const type=document.getElementById('ad-type').value;
  const qty=parseInt(document.getElementById('ad-qty').value)||0;
  const rate=parseFloat(document.getElementById('ad-rate').value)||0;
  const date=document.getElementById('ad-date').value;
  const userId=currentUser.role!=='user'?(document.getElementById('ad-user')?.value||currentUser.id):currentUser.id;
  if(!code||qty<1||!date){alert('Please fill all fields.');return;}
  DB.designs.push({id:uid(),code,designType:type,quantity:qty,unitRate:rate,totalValue:qty*rate,date,userId,status:'active',createdAt:new Date().toISOString(),uploadedFile:null});
  addAudit('DESIGN_ADDED',`${code} (${qty} crowns, ${qty*rate} AFG)`);
  saveDB();closeModal();
  if(currentUser.role==='user')renderMyDesigns();else renderAllDesigns();
}

// ── ADD PAYMENT ──
function openAddPayment(){
  const users=DB.users;
  showModal('💳 Record Payment',`
    <div class="fg"><label>Designer</label><select id="ap-user">${users.map(u=>`<option value="${u.id}">${u.fullName}</option>`).join('')}</select></div>
    <div class="fg"><label>Amount (AFG)</label><input type="number" id="ap-amount" min="1" placeholder="Enter amount"/></div>
    <div class="fg"><label>Date</label><input type="date" id="ap-date" value="${new Date().toISOString().slice(0,10)}"/></div>
    <div class="fg"><label>Notes</label><textarea id="ap-notes" rows="2" placeholder="Optional notes"></textarea></div>`,
    [{label:'Cancel',cls:'btn-s',action:'closeModal()'},{label:'Record',cls:'btn-g',action:'savePayment()'}]);
}
function savePayment(){
  const userId=document.getElementById('ap-user').value;
  const amount=parseFloat(document.getElementById('ap-amount').value)||0;
  const date=document.getElementById('ap-date').value;
  const notes=document.getElementById('ap-notes').value.trim();
  if(!userId||amount<=0||!date){alert('Fill all fields.');return;}
  const u=DB.users.find(x=>x.id===userId);
  DB.payments.push({id:uid(),userId,amount,date,notes,createdBy:currentUser.id,createdAt:new Date().toISOString()});
  addAudit('PAYMENT_ADDED',`${amount} AFG for ${u?u.fullName:'?'}`);
  saveDB();closeModal();renderPayments();
}

// ── ADD USER ──
function openAddUser(){
  if(currentUser.role==='user')return;
  showModal('👤 Add New User',`
    <div class="g2">
      <div class="fg"><label>Full Name</label><input id="au-name" placeholder="Full name"/></div>
      <div class="fg"><label>Username</label><input id="au-username" placeholder="username or email"/></div>
      <div class="fg"><label>Password</label><input type="password" id="au-password" placeholder="Password"/></div>
      <div class="fg"><label>Role</label><select id="au-role">${currentUser.role==='owner'?'<option value="admin">Admin</option>':''}<option value="user">Designer</option></select></div>
    </div>
    <div class="alert ai">A license key will be auto-generated.</div>`,
    [{label:'Cancel',cls:'btn-s',action:'closeModal()'},{label:'Create User',cls:'btn-p',action:'saveUser()'}]);
}
function saveUser(){
  const name=document.getElementById('au-name').value.trim();
  const username=document.getElementById('au-username').value.trim();
  const password=document.getElementById('au-password').value.trim();
  const role=document.getElementById('au-role').value;
  if(!name||!username||!password){alert('Fill all fields.');return;}
  if(DB.users.find(u=>u.username===username)){alert('Username already exists.');return;}
  const lk=genLic(role);
  DB.licenses.push({id:uid(),key:lk,type:role,status:'active',createdBy:currentUser.id,createdAt:new Date().toISOString()});
  DB.users.push({id:uid(),fullName:name,username,email:username,password,role,status:'active',licenseKey:lk,joinDate:new Date().toISOString().slice(0,10),lastLogin:null,avatar:null});
  addAudit('USER_CREATED',`${role} "${name}" created`);
  saveDB();closeModal();
  showModal('✅ User Created',`
    <div class="alert as">User <strong>${name}</strong> created!</div>
    <div class="fg"><label>License Key — share this with the user</label><div class="lic-key">${lk}</div></div>
    <div class="fg"><label>Username</label><input value="${username}" readonly/></div>
    <div class="fg"><label>Password</label><input value="${password}" readonly/></div>`,
    [{label:'Done',cls:'btn-p',action:'closeModal()'}]);
}

// ── DELETE REQUEST ──
function requestDelete(id){
  if(currentUser.role!=='user'){delDesign(id);return;}
  const d=DB.designs.find(x=>x.id===id);if(!d)return;
  DB.deletionRequests.push({id:uid(),designId:id,requestedBy:currentUser.id,requestedAt:new Date().toISOString(),status:'pending'});
  addAudit('DELETION_REQUESTED',`Delete request for ${d.code}`);saveDB();
  alert('Deletion request submitted for review.');renderMyDesigns();
}

// ── APPROVALS ──
function renderApprovals(){
  const pending=DB.deletionRequests.filter(r=>r.status==='pending');
  document.getElementById('mainContent').innerHTML=ph('✅ Pending Approvals')+`
  <div class="card">${pending.length?`<div class="tw"><table>
    <thead><tr><th>Code</th><th>Requested By</th><th>Date</th><th>Actions</th></tr></thead>
    <tbody>${pending.map(r=>{const d=DB.designs.find(x=>x.id===r.designId),u=DB.users.find(x=>x.id===r.requestedBy);
      return`<tr><td><span class="code">${d?d.code:'?'}</span></td><td>${u?u.fullName:'?'}</td><td>${ft(r.requestedAt)}</td>
      <td style="display:flex;gap:7px"><button class="btn btn-g btn-sm" onclick="approveDelete('${r.id}')">✅ Approve</button><button class="btn btn-d btn-sm" onclick="rejectDelete('${r.id}')">❌ Reject</button></td></tr>`;
    }).join('')}</tbody></table></div>`:'<p style="text-align:center;color:var(--t3);padding:32px">No pending requests</p>'}
  </div>`;
}
function approveDelete(rid){const r=DB.deletionRequests.find(x=>x.id===rid);if(!r)return;const d=DB.designs.find(x=>x.id===r.designId);if(d)d.status='deleted';r.status='approved';addAudit('DELETION_APPROVED',`Design ${d?d.code:'?'} deleted`);saveDB();renderApprovals();}
function rejectDelete(rid){const r=DB.deletionRequests.find(x=>x.id===rid);if(r){r.status='rejected';addAudit('DELETION_REJECTED','Deletion rejected');saveDB();renderApprovals();}}

// ── REPORTS ──
function renderReports(){
  const uid_=currentUser.id,isA=currentUser.role!=='user';
  const designs=isA?DB.designs.filter(d=>d.status!=='deleted'):DB.designs.filter(d=>d.userId===uid_&&d.status!=='deleted');
  const wa=new Date();wa.setDate(wa.getDate()-7);
  const ma=new Date();ma.setMonth(ma.getMonth()-1);
  const wk=designs.filter(d=>new Date(d.date)>=wa),mo=designs.filter(d=>new Date(d.date)>=ma);
  document.getElementById('mainContent').innerHTML=ph('📊 Reports')+`
  <div class="stats-grid">
    <div class="sc sa"><div class="sc-lbl">Weekly Crowns</div><div class="sc-val">${wk.reduce((s,d)=>s+d.quantity,0)}</div></div>
    <div class="sc sg"><div class="sc-lbl">Weekly Earnings</div><div class="sc-val">${wk.reduce((s,d)=>s+d.totalValue,0).toLocaleString()}</div><div class="sc-sub">AFG</div></div>
    <div class="sc sgg"><div class="sc-lbl">Monthly Crowns</div><div class="sc-val">${mo.reduce((s,d)=>s+d.quantity,0)}</div></div>
    <div class="sc sr"><div class="sc-lbl">Monthly Earnings</div><div class="sc-val">${mo.reduce((s,d)=>s+d.totalValue,0).toLocaleString()}</div><div class="sc-sub">AFG</div></div>
  </div>
  <div class="card"><div class="card-title" style="margin-bottom:12px">📥 Export</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-gold" onclick="exportReport('weekly')">📥 Weekly HTML Report</button>
      <button class="btn btn-s" onclick="exportReport('monthly')">📥 Monthly HTML Report</button>
    </div>
  </div>
  <div class="card"><div class="card-title" style="margin-bottom:12px">📋 Summary</div>
    <div class="tw"><table><thead><tr><th>Code</th>${isA?'<th>Designer</th>':''}<th>Type</th><th>Crowns</th><th>Total</th><th>Date</th></tr></thead>
    <tbody>${designs.slice().reverse().slice(0,20).map(d=>{const u=DB.users.find(x=>x.id===d.userId);return`<tr><td><span class="code">${d.code}</span></td>${isA?`<td>${u?u.fullName:'-'}</td>`:''}<td>${d.designType}</td><td>${d.quantity}</td><td style="color:var(--gold)">${d.totalValue.toLocaleString()} AFG</td><td>${fd(d.date)}</td></tr>`;}).join('')||`<tr><td colspan="${isA?6:5}" style="text-align:center;color:var(--t3);padding:20px">No records</td></tr>`}</tbody>
    </table></div>
  </div>`;
}
function exportReport(period){
  const uid_=currentUser.id,isA=currentUser.role!=='user';
  const cut=new Date();if(period==='weekly')cut.setDate(cut.getDate()-7);else cut.setMonth(cut.getMonth()-1);
  const designs=(isA?DB.designs:DB.designs.filter(d=>d.userId===uid_)).filter(d=>d.status!=='deleted'&&new Date(d.date)>=cut);
  const tC=designs.reduce((s,d)=>s+d.quantity,0),tA=designs.reduce((s,d)=>s+d.totalValue,0);
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Crown Tracker Report</title><style>body{font-family:system-ui,sans-serif;background:#0d0f14;color:#e8ecf4;margin:0;padding:24px}h1{color:#4f8ef7;font-size:26px}p{color:#8892a4;font-size:13px;margin-bottom:20px}.s{display:flex;gap:16px;margin-bottom:24px;flex-wrap:wrap}.sc{background:#181c27;border:1px solid #252a3a;border-radius:10px;padding:16px 24px}.sv{font-size:26px;font-weight:800;color:#f5c842}.sl{font-size:11px;color:#8892a4;margin-top:4px}table{width:100%;border-collapse:collapse;background:#181c27;border-radius:10px;overflow:hidden}th{background:#13161e;padding:12px;text-align:left;font-size:11px;color:#4f8ef7;letter-spacing:1px;text-transform:uppercase}td{padding:12px;border-bottom:1px solid #252a3a;font-size:13px}tr:last-child td{border-bottom:none}.c{font-family:monospace;background:#252a3a;padding:2px 8px;border-radius:4px;color:#4f8ef7}footer{margin-top:24px;text-align:center;color:#4a5268;font-size:12px}</style></head>
  <body><h1>🦷 Crown Tracker</h1><p>${period.charAt(0).toUpperCase()+period.slice(1)} Report | ${new Date().toLocaleString()}</p>
  <div class="s"><div class="sc"><div class="sv">${tC}</div><div class="sl">Total Crowns</div></div><div class="sc"><div class="sv">${designs.length}</div><div class="sl">Orders</div></div><div class="sc"><div class="sv">${tA.toLocaleString()} AFG</div><div class="sl">Total Payable</div></div></div>
  <table><thead><tr><th>Code</th><th>Type</th><th>Crowns</th><th>Rate</th><th>Total</th><th>Date</th></tr></thead>
  <tbody>${designs.map(d=>`<tr><td><span class="c">${d.code}</span></td><td>${d.designType}</td><td>${d.quantity}</td><td>${d.unitRate} AFG</td><td style="color:#f5c842">${d.totalValue.toLocaleString()} AFG</td><td>${fd(d.date)}</td></tr>`).join('')||'<tr><td colspan="6" style="text-align:center;color:#4a5268">No records</td></tr>'}</tbody></table>
  <footer>Developed by Marvan Yaftally | MKY | Crown Tracker v1.0</footer></body></html>`;
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([html],{type:'text/html'}));
  a.download=`crown-tracker-${period}-${new Date().toISOString().slice(0,10)}.html`;a.click();
}

// ── LICENSES ──
function renderLicenses(){
  if(currentUser.role!=='owner'){navigateTo('dashboard');return;}
  document.getElementById('mainContent').innerHTML=ph('🔑 License Management',`<button class="btn btn-p btn-sm" onclick="openGenLicense()">+ Generate</button>`)+`
  <div class="card"><div class="tw"><table>
    <thead><tr><th>License Key</th><th>Type</th><th>Status</th><th>Created</th><th>Actions</th></tr></thead>
    <tbody>${DB.licenses.length?DB.licenses.slice().reverse().map(l=>`<tr>
      <td><div class="lic-key" style="font-size:10px">${l.key}</div></td>
      <td><span class="badge b-${l.type==='admin'?'admin':'user'}">${l.type}</span></td>
      <td><span class="dot ${l.status==='active'?'dg':'dr'}"></span>${l.status}</td>
      <td>${fd(l.createdAt)}</td>
      <td>${l.status==='active'?`<button class="btn btn-d btn-sm" onclick="revokeLic('${l.id}')">Revoke</button>`:`<button class="btn btn-g btn-sm" onclick="reactivateLic('${l.id}')">Reactivate</button>`}</td>
    </tr>`).join(''):'<tr><td colspan="5" style="text-align:center;color:var(--t3);padding:24px">No licenses yet</td></tr>'}</tbody>
  </table></div></div>`;
}
function openGenLicense(){
  showModal('🔑 Generate License',`
    <div class="fg"><label>Type</label><select id="gl-type"><option value="admin">Admin License</option><option value="user">User License</option></select></div>
    <button class="btn btn-gold" onclick="genLicNow()" style="margin-top:4px">Generate Key</button>
    <div id="gl-result" style="margin-top:14px"></div>`,
    [{label:'Close',cls:'btn-s',action:'closeModal()'}]);
}
function genLicNow(){
  const type=document.getElementById('gl-type').value;const key=genLic(type);
  DB.licenses.push({id:uid(),key,type,status:'active',createdBy:currentUser.id,createdAt:new Date().toISOString()});
  addAudit('LICENSE_GENERATED',`${type}: ${key}`);saveDB();
  document.getElementById('gl-result').innerHTML=`<div class="alert as">License generated!</div><div class="fg"><label>Key</label><div class="lic-key">${key}</div></div>`;
}
function revokeLic(id){const l=DB.licenses.find(x=>x.id===id);if(l){l.status='revoked';saveDB();renderLicenses();}}
function reactivateLic(id){const l=DB.licenses.find(x=>x.id===id);if(l){l.status='active';saveDB();renderLicenses();}}

// ── SETTINGS ──
function renderSettings(){
  if(currentUser.role==='user'){navigateTo('dashboard');return;}
  document.getElementById('mainContent').innerHTML=ph('⚙️ Settings')+`
  <div class="card"><div class="card-title" style="margin-bottom:12px">💲 Design Rate</div>
    <div class="fg" style="max-width:280px"><label>Rate per Crown (AFG)</label><input type="number" id="sr-rate" value="${DB.settings.designRate}" min="1"/></div>
    <button class="btn btn-p" onclick="saveSettings()">Save Rate</button>
  </div>
  ${currentUser.role==='owner'?`<div class="card"><div class="card-title" style="margin-bottom:12px">🔐 Change Owner Credentials</div>
    <div class="g2">
      <div class="fg"><label>New Username</label><input id="oc-user" placeholder="${currentUser.username}"/></div>
      <div class="fg"><label>New Password</label><input type="password" id="oc-pass" placeholder="New password"/></div>
    </div>
    <button class="btn btn-p" onclick="changeOwnerCreds()">Update</button>
  </div>`:''}`;
}
function saveSettings(){const r=parseFloat(document.getElementById('sr-rate').value)||40;DB.settings.designRate=r;addAudit('RATE_CHANGED',`Rate → ${r} AFG`);saveDB();alert('Rate updated to '+r+' AFG');}
function changeOwnerCreds(){
  const u=document.getElementById('oc-user').value.trim(),p=document.getElementById('oc-pass').value.trim();
  const owner=DB.users.find(x=>x.role==='owner');
  if(owner){if(u){owner.username=u;currentUser.username=u;}if(p)owner.password=p;addAudit('CREDENTIALS_CHANGED','Owner credentials updated');saveDB();alert('Updated!');}
}

// ── AUDIT ──
function renderAudit(){
  if(currentUser.role!=='owner'){navigateTo('dashboard');return;}
  document.getElementById('mainContent').innerHTML=ph('🔍 Audit Log')+`
  <div class="card">${DB.auditLog.length?DB.auditLog.map(l=>`<div class="log-e">
    <div class="log-t">${ft(l.timestamp)} | <span class="badge b-${l.role}">${l.role}</span> ${l.user}</div>
    <div class="log-a">${l.action}</div>
    ${l.details?`<div style="color:var(--t2);font-size:10px;margin-top:1px">${l.details}</div>`:''}
  </div>`).join(''):'<p style="text-align:center;color:var(--t3);padding:32px">No logs yet</p>'}
  </div>`;
}

// ── MODAL ──
function showModal(title,body,buttons=[]){
  document.getElementById('modalTitle').innerHTML=title;
  document.getElementById('modalBody').innerHTML=body;
  document.getElementById('modalFooter').innerHTML=buttons.map(b=>`<button class="btn ${b.cls}" onclick="${b.action}">${b.label}</button>`).join('');
  document.getElementById('modalOverlay').classList.remove('hidden');
}
function closeModal(){document.getElementById('modalOverlay').classList.add('hidden');}
document.getElementById('modalOverlay').addEventListener('click',function(e){if(e.target===this)closeModal();});

// ── INIT ──
(function(){
  if(restoreSession())showApp();
  if('serviceWorker' in navigator&&location.hostname!=='www.claudeusercontent.com'){
    navigator.serviceWorker.register('/service-worker.js').catch(()=>{});
  }
})();
</script>
</body>
</html>