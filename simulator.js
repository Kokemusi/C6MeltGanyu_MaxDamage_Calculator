//dictionary
let stat_dict = ["lv","batk","atk","fatk","db","cr","cd","em","scale"];
let db_dict = ["Normal","PCA","FFA","FFB","Skill","Burst"];
let scale_dict = ["Normal","PCA","FFA","FFB","Skill","Burst"];
let ps_dict = [0,20,40,60,96];
let sub_dict = {
				lv:0,
				batk:0,
				atk:5.83,
				fatk:19.45,
				db:{
					Normal:0,
					PCA:0,
					FFA:0,
					FFB:0,
					Skill:0,
					Burst:0
				},
				cr:3.89,
				cd:7.77,
				em:23,
				scale:{
					Normal:0,
					PCA:0,
					FFA:0,
					FFB:0,
					Skill:0,
					Burst:0
				}
}


//Settings
let WeaponName="AquaSimulacra" //PolarStar, Amos'sBow AquaSimulacra is available.
let BennettbAtk = 799;
let KazuhaEM = 1015;
function C4(am){
	let buff_a = {Normal:am,PCA:am,FFA:am,FFB:am,Skill:am,Burst:am};
	return buff_a;
}
let A4 = {Normal:0,PCA:0,FFA:20,FFB:20,Skill:20,Burst:20};
function Kzh(EMBuff){
	let CDB = 0.04*(KazuhaEM+EMBuff);
	let buff= {Normal:0,PCA:0,FFA:CDB,FFB:CDB,Skill:CDB,Burst:CDB};
	return buff;
}
let FS = {Normal:16,PCA:16,FFA:16,FFB:16,Skill:0,Burst:0};
let ALL = calc_db([C4(20),A4,Kzh(120),FS]);
let buff_list =	[
		{atk:0,fatk:0,db:calc_db(),cr:0,cd:0,em:0,res:0,melt:0},//N
		{atk:0,fatk:0,db:calc_db(),cr:0,cd:0,em:0,res:0,melt:0},//PCA
		{atk:0,fatk:0,db:calc_db(),cr:0,cd:0,em:0,res:0,melt:0},//E
		{atk:0,fatk:0,db:C4(5),cr:0,cd:0,em:0,res:0,melt:0},//Q1
		{atk:0,fatk:0,db:C4(5),cr:0,cd:0,em:0,res:-40,melt:0},//Q2
		{atk:0,fatk:0,db:C4(10),cr:0,cd:0,em:0,res:-40,melt:0},//Q3
		{atk:0,fatk:0,db:C4(10),cr:0,cd:0,em:0,res:-40,melt:1},//Q4(Pyro applicated few seconds before this one hits)
		{atk:0,fatk:0,db:C4(15),cr:0,cd:0,em:0,res:-40,melt:0},//Q5
		{atk:0,fatk:0,db:C4(15),cr:0,cd:0,em:0,res:-40,melt:1},//Q6(this is 3 sec after Q4)
		{atk:0,fatk:0,db:C4(20),cr:0,cd:0,em:0,res:-40,melt:0},//Q7
		{atk:0,fatk:0,db:C4(20),cr:0,cd:0,em:0,res:-40,melt:1},//Q8(this is 3 sec after Q6)
		{atk:0,fatk:0,db:C4(25),cr:0,cd:0,em:0,res:-40,melt:0},//Q9
		{atk:0,fatk:0,db:C4(25),cr:0,cd:0,em:0,res:-40,melt:1},//Q10(this is 3 sec after Q8)
		{atk:0,fatk:0,db:calc_db(),cr:0,cd:0,em:0,res:-40,melt:0},//E
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:0,cd:0,em:0,res:0,melt:0},//N
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:0,cd:0,em:120+250,res:-40,melt:1},//CA1
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:0,cd:0,em:120+250,res:-55,melt:1},//CA2
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:0,cd:0,em:120+250,res:-55,melt:1},//E
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:20,cd:0,em:120+250,res:-55,melt:1},//CA1
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:20,cd:0,em:120+250,res:-55,melt:1},//CA2
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:0,cd:0,em:120+250,res:-55,melt:1},//E
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:20,cd:0,em:120+250,res:-55,melt:1},//CA1
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:20,cd:0,em:120+250,res:-55,melt:1},//CA2
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:0,cd:0,em:120+250,res:-55,melt:1},//E(Blooms after 3CA)
		{atk:48+20,fatk:1.32*BennettbAtk,db:ALL,cr:0,cd:0,em:120+250,res:-55,melt:1},//E(Blooms after 3CA)
		];
let target_list = ["Normal","PCA","Skill","Burst","Burst","Burst","Burst","Burst","Burst","Burst","Burst","Burst","Burst","Skill","Normal","FFA","FFB","Skill","FFA","FFB","Skill","FFA","FFB","Skill","Skill"];
let PS_stack_list = [0,1,2,3,3,3,3,3,3,3,3,3,3,2,3,4,4,4,4,4,4,4,4,4,4];
let Amos_stack_list = [0,0,5,5,5,5,5,5,5,5,5,5,5,5,0,0,3,5,0,3,5,0,3,5,5];
function calc_db(Buffs){
	let tdb={Normal:0,PCA:0,FFA:0,FFB:0,Skill:0,Burst:0};
	if(!(Buffs==null)){
		for(let i=0; i<Buffs.length; i++){
			for(let j=0; j<6; j++){
				tdb[db_dict[j]]=tdb[db_dict[j]]+Buffs[i][db_dict[j]];
			}
		}
	}
	return tdb;
}
















//GanyuData
function Ganyu_Base(){
	let G_Base = 	{
				lv:90,
				batk:335,
				atk:0,
				fatk:0,
				db:{
					Normal:0,
					PCA:0,
					FFA:0,
					FFB:0,
					Skill:0,
					Burst:0
				},
				cr:5,
				cd:88.4,
				em:0,
				scale:{
					Normal:62.7,
					PCA:86.7,
					FFA:230,
					FFB:392,
					Skill:281,
					Burst:149
				}
	}
	return G_Base;
}
//WeaponData. lv means char lv, and it doesn't add so it is 0
function Weapon_Base(weapon,i){
	if(weapon=="PolarStar"){
		return PolarStar_Base(PS_stack_list[i]);
	}else if(weapon=="Amos'sBow"){
		return Amos_Base(Amos_stack_list[i]);
	}else if(weapon=="AquaSimulacra"){
		return Aqua_Base();
	}else if(weapon=="TheFirstGreatMagic"){
		return TFGM_Base();
	}else if(weapon=="HuntersPath"){
		return Hunters_Base();
	}
}
function PolarStar_Base(stack){
	let PS_Base =	{
					lv:0,
					batk:608,
					atk:ps_dict[stack],
					fatk:0,
					db:{
						Normal:0,
						PCA:0,
						FFA:0,
						FFB:0,
						Skill:24,
						Burst:24
					},
					cr:33.1,
					cd:0,
					em:0,
					scale:{
						Normal:0,
						PCA:0,
						FFA:0,
						FFB:0,
						Skill:0,
						Burst:0
					}
			}
	return PS_Base;
}
function Amos_Base(stack){
	let AB_Base =	{
					lv:0,
					batk:608,
					atk:49.6,
					fatk:0,
					db:{
						Normal:24+16*stack,
						PCA:24+16*stack,
						FFA:24+16*stack,
						FFB:24+16*stack,
						Skill:0,
						Burst:0
					},
					cr:0,
					cd:0,
					em:0,
					scale:{
						Normal:0,
						PCA:0,
						FFA:0,
						FFB:0,
						Skill:0,
						Burst:0
					}
			}
	return AB_Base;
}
function Aqua_Base(stack){
	let Aq_Base =	{
					lv:0,
					batk:542,
					atk:0,
					fatk:0,
					db:{
						Normal:40,
						PCA:40,
						FFA:40,
						FFB:40,
						Skill:40,
						Burst:40
					},
					cr:0,
					cd:88.2,
					em:0,
					scale:{
						Normal:0,
						PCA:0,
						FFA:0,
						FFB:0,
						Skill:0,
						Burst:0
					}
			}
	return Aq_Base;
}
function TFGM_Base(stack){
	let tfgm_Base =	{
					lv:0,
					batk:608,
					atk:32,
					fatk:0,
					db:{
						Normal:0,
						PCA:32,
						FFA:32,
						FFB:32,
						Skill:0,
						Burst:0
					},
					cr:0,
					cd:66.2,
					em:0,
					scale:{
						Normal:0,
						PCA:0,
						FFA:0,
						FFB:0,
						Skill:0,
						Burst:0
					}
			}
	return tfgm_Base;
}
function Hunters_Base(stack){
	let HP_Base =	{
					lv:0,
					batk:542,
					atk:0,
					fatk:0,
					db:{
						Normal:24,
						PCA:24,
						FFA:24,
						FFB:24,
						Skill:24,
						Burst:24
					},
					cr:44.1,
					cd:0,
					em:0,
					scale:{
						Normal:0,
						PCA:0,
						FFA:0,
						FFB:0,
						Skill:0,
						Burst:0
					}
			}
	return HP_Base;
}



//ArtifactData. lv means char lv, and it doesn't add so it is 0.
let sub_range={
			atk:[5,30],
			fatk:[2,2],
			cr:[4,24],
			cd:[5,30],
			em:[4,24]
}
//fatk=2, 5<atk<30, 4<cr<24, 5<cd<30, 4<em<24
let Substatus =	{
			lv:0,
			batk:0,
			atk:5,
			fatk:2,
			db:{
				Normal:0,
				PCA:0,
				FFA:0,
				FFB:0,
				Skill:0,
				Burst:0
			},
			cr:10,
			cd:24,
			em:4,
			scale:{
				Normal:0,
				PCA:0,
				FFA:0,
				FFB:0,
				Skill:0,
				Burst:0
			}
};


function artifact_ref(s_main){
	let Artifact =	{
			lv:0,
			batk:0,
			atk:0,
			fatk:311,
			db:{
				Normal:0,
				PCA:35,
				FFA:35+46.6,
				FFB:35+46.6,
				Skill:46.6,
				Burst:46.6
			},
			cr:0,
			cd:62.2,
			em:80,
			scale:{
				Normal:0,
				PCA:0,
				FFA:0,
				FFB:0,
				Skill:0,
				Burst:0
			}
	};
	if(s_main == "em"){
		Artifact.em=Artifact.em+187;
	}else if(s_main == "atk"){
		Artifact.atk=Artifact.atk+46.6;
	}
	for(let i=0; i<stat_dict.length; i++){
		if(stat_dict[i]=="db"){
			for(let j=0; j<6; j++){
				Artifact.db[db_dict[j]]=Artifact.db[db_dict[j]]+Substatus.db[db_dict[j]]*sub_dict.db[db_dict[j]];
			}
		}else if(stat_dict[i]=="scale"){
			for(let j=0; j<6; j++){
				Artifact.scale[scale_dict[j]]=Artifact.scale[scale_dict[j]]+Substatus.scale[scale_dict[j]]*sub_dict.scale[scale_dict[j]];
			}
		}else{
			Artifact[stat_dict[i]]=Artifact[stat_dict[i]]+Substatus[stat_dict[i]]*sub_dict[stat_dict[i]];
		}
	}
	return Artifact;
}


//calculating "base"
function CalcBaseStats(c_base,w_base,a_flex){
	let Base = {
			lv:0,
			batk:0,
			atk:0,
			fatk:0,
			db:{
				Normal:0,
				PCA:0,
				FFA:0,
				FFB:0,
				Skill:0,
				Burst:0
			},
			cr:0,
			cd:0,
			em:0,
			scale:{
				Normal:0,
				PCA:0,
				FFA:0,
				FFB:0,
				Skill:0,
				Burst:0
			}
	};
	for(let i=0; i<stat_dict.length; i++){
		if(stat_dict[i]=="db"){
			for(let j=0; j<6; j++){
				Base.db[db_dict[j]]=c_base.db[db_dict[j]]+w_base.db[db_dict[j]]+a_flex.db[db_dict[j]];
			}
		}else if(stat_dict[i]=="scale"){
			for(let j=0; j<6; j++){
				Base.scale[scale_dict[j]]=c_base.scale[scale_dict[j]]+w_base.scale[scale_dict[j]]+a_flex.scale[scale_dict[j]];
			}
		}else{
			Base[stat_dict[i]]=c_base[stat_dict[i]]+w_base[stat_dict[i]]+a_flex[stat_dict[i]];
		}
	}
	return Base;
}
//calc status

function CalcStat(base,buff,target){
	let Atk = base.atk+buff.atk;
	let fAtk = base.fatk+buff.fatk;
	let nAtk = base.batk*(1+base.atk/100)+base.fatk;
	let tAtk = base.batk*(1+Atk/100)+fAtk;
	let tDmgB = base.db[target]+buff.db[target];
	let DmgBFix = (1+tDmgB/100);
	let CrtRate = base.cr+buff.cr;
	let CrtDmg = base.cd+buff.cd;
	let CrtAvg;
	if(CrtRate<100){
		CrtAvg = 1+CrtRate*CrtDmg/10000;
	}else{
		CrtAvg = 1+CrtDmg/100;
	}
	let EM = base.em+buff.em;
	let status = {
			NoBuffAttack:nAtk,
			TotalAttack:tAtk,
			TotalDmgBonus:tDmgB,
			CritRate:CrtRate,
			CritDmg:CrtDmg,
			ElementalMastery:EM
	}
	return status;
}

//damage calculating
let enemy_base = {lv:90,res:10};
function Damage(base,e_base,buff,target){
	let Def = (base.lv+100)/(e_base.lv+base.lv+200);
	let Atk = base.atk+buff.atk;
	let fAtk = base.fatk+buff.fatk;
	let tAtk = base.batk*(1+Atk/100)+fAtk;
	let tDmgB = base.db[target]+buff.db[target];
	let DmgBFix = (1+tDmgB/100);
	let CrtRate = base.cr+buff.cr;
	let CrtDmg = base.cd+buff.cd;
	let CrtAvg;
	if(CrtRate<100){
		CrtAvg = 1+CrtRate*CrtDmg/10000;
	}else{
		CrtAvg = 1+CrtDmg/100;
	}
	let EM = base.em+buff.em;
	let MeltFix = 1;
	if(buff.melt == 1){
		MeltFix = 1.5*(1+2.78*EM/(EM+1400));
	}
	let tRes = e_base.res+buff.res;
	let ResFix = 1;
	if(tRes>0){
		ResFix = ResFix - tRes/100;
	}else{
		ResFix = ResFix - tRes/200;
	}
	let HPFix = 0;
	if(WeaponName == "HuntersPath" && (target == "FFA" || target == "FFB")){
		HPFix = 3.20*EM;
	}
	return (base.scale[target]/100*tAtk+HPFix)*CrtAvg*DmgBFix*MeltFix*Def*ResFix;
}
function totalDmg(weapon,sands_m,detail){
	let gtdmg = {Normal:0,PCA:0,FFA:0,FFB:0,Skill:0,Burst:0}
	let now_target;
	let tdmg = 0;
	for(let i=0; i<target_list.length; i++){
		let p_base = CalcBaseStats(Ganyu_Base(),Weapon_Base(weapon,i),artifact_ref(sands_m));
		tdmg=tdmg+Damage(p_base,enemy_base,buff_list[i],target_list[i])
		now_target=target_list[i];
		gtdmg[now_target]=gtdmg[now_target]+Damage(p_base,enemy_base,buff_list[i],target_list[i]);
	}
	if(detail){
		return gtdmg;
	}else{
		return tdmg;
	}
}

//optimizing substatus
let simu_start=document.getElementById('start');
simu_start.addEventListener('click',calculate);
function OptimizeSub(weapon,sands_m){
	let sub = ["fatk","atk","cr","cd","em"];
	let vec = [0,0];
	let dmg1 = 0;
	let dmg2 = 0;
	let counter = 0;
	let dmgList= Array(sub.length*sub.length);
	let vecList= Array(sub.length*sub.length);
	let last_max = 0;
	let max = -1/0;
	let escape = 0;
	let max_i=0;
	let sub_a;
	let sub_b;
	while(counter==0){
		for(vec[0]=0;vec[0]<sub.length;vec[0]++){
			for(vec[1]=0;vec[1]<sub.length;vec[1]++){
				sub_a=sub[vec[0]];
				sub_b=sub[vec[1]];
				Substatus[sub_a]++;
				Substatus[sub_b]--;
				if((sub_range[sub_a][0]<=Substatus[sub_a]  && Substatus[sub_a]<=sub_range[sub_a][1])&&(sub_range[sub_b][0]<=Substatus[sub_b]  && Substatus[sub_b]<=sub_range[sub_b][1])){
					dmgList[vec[0]+vec[1]*sub.length]=totalDmg(weapon,sands_m);
				}else{
					dmgList[vec[0]+vec[1]*sub.length]=-1/0;
				}
				vecList[vec[0]+vec[1]*sub.length]=[vec[0],vec[1]];
				Substatus[sub_b]++;
				Substatus[sub_a]--;
			}
		}
		last_max=max;
		max=Math.max(...dmgList);
		max_i=dmgList.indexOf(max);
		if(vecList[max_i][0]==1){
			console.log(vecList);
		}
		sub_a=sub[vecList[max_i][0]];
		sub_b=sub[vecList[max_i][1]];
		Substatus[sub_a]++;
		Substatus[sub_b]--;
		if(vecList[max_i][0]==vecList[max_i][1]){
			counter = 1;
		}else if(max<last_max){
			Substatus[sub_b]++;
			Substatus[sub_a]--;
			counter = 1;	
		}
		escape++;
	}
}



function calculate(){
	Substatus =	{
			lv:0,
			batk:0,
			atk:5,
			fatk:2,
			db:{
				Normal:0,
				PCA:0,
				FFA:0,
				FFB:0,
				Skill:0,
				Burst:0
			},
			cr:4,
			cd:30,
			em:4,
			scale:{
				Normal:0,
				PCA:0,
				FFA:0,
				FFB:0,
				Skill:0,
				Burst:0
			}
	};
	let weaponid = document.getElementById("Weapon");
	let sandsid = document.getElementById("Sands");
	let resultid = document.getElementById("result");
	WeaponName=weaponid.value;
	OptimizeSub(WeaponName,sandsid.value);
	let i = 19;
	let p_base = CalcBaseStats(Ganyu_Base(),Weapon_Base(WeaponName,i),artifact_ref(sandsid.value));
	let status = CalcStat(p_base,buff_list[i],target_list[i]);
	let CA_DMG = Damage(p_base,enemy_base,buff_list[i],target_list[i]);
	let Total_DMG = totalDmg(WeaponName,sandsid.value);
	console.log(totalDmg(WeaponName,sandsid.value,true),WeaponName,sandsid.value);
	resultid.innerHTML = "<b>Stats for 2nd FFA/FFB<br>Raw ATK:"+status.NoBuffAttack+"(Includes ATK from Polar Star stacks)<br>Total ATK:"+status.TotalAttack+"<br>Crit Rate:"+status.CritRate+"(Includes A4 buff)<br>Crit Damage:"+status.CritDmg+"<br>Elemental Mastery:"+status.ElementalMastery+"(Includes all buff)<br>Flost Flake Bloom Damage:"+CA_DMG+"<br>Total damage:"+Total_DMG+"</b>";
}
