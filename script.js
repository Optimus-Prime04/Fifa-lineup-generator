function generateLineup() {
    let formation=document.getElementById("formation").value;
    let captain=document.getElementById("captain").value;
    let teamName=document.getElementById("teamName").value;
    let coachName=document.getElementById("coachName").value;
    let competition=document.getElementById("competition").value;
    let matchDate=document.getElementById("matchDate").value;


document.getElementById("teamTitle").innerText=teamName;
document.getElementById("coachDisplay").innerText=coachName;
document.getElementById("competitionDisplay").innerText=competition;
document.getElementById("dateDisplay").innerText=matchDate;
for(let i=1; i<=11; i++){
    let playerName=document.getElementById("player"+i+"Name").value;
    let playerNumber=document.getElementById("player"+i+"Number").value;
    document.getElementById("player"+i).innerHTML=playerNumber + "<br><span class='player-name'>"+playerName+"</span>";

}
let captainName = document.querySelector("#player" + captain + ' .player-name');
captainName.innerHTML +="(C)";
    
if (formation==="442") {
    document.getElementById("pitchImage").src="assets/4-4-2.png";
    document.getElementById("lineupArea").classList.add("formation442");
}
if (formation==="433") {
    document.getElementById("pitchImage").src="assets/4-3-3.png";
    document.getElementById("lineupArea").classList.remove("formation442");
}    

let totalOVR=0;
for(let i=1;i<=11;i++){
    totalOVR+=Number(
        document.getElementById("player"+i+"OVR").value
        );

    
}
let teamOVR=Math.round(totalOVR/11);
document.getElementById("teamOVRNumber").innerText=teamOVR;
}


function downloadLineup() {
    let lineupArea=document.getElementById("lineupArea");
    html2canvas(lineupArea).then(function(canvas){
        let link=document.createElement("a");
        link.download="fifa-lineup.png";
        link.href=canvas.toDataURL();
        link.click();
    });
}
