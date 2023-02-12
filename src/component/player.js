import {FiHome} from "react-icons/fi";
import {AiOutlineFileImage} from "react-icons/ai";
import {RxPerson} from "react-icons/rx";
import {BiCategoryAlt} from "react-icons/bi";
import {MdAccessAlarm} from "react-icons/md";
import {AiOutlineFile} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {AiOutlineBell} from "react-icons/ai";
import {BsFillPlayFill} from "react-icons/bs";
import {BsFillSuitHeartFill} from "react-icons/bs";
import {RiPlayListFill} from "react-icons/ri";

import {FcLike} from "react-icons/fc";
import {AiOutlinePlusCircle} from "react-icons/ai";
import axios from 'axios';
import { useState } from "react";
import "../component/player.css";

const Mp=()=>{

    const [val,setVal] = useState("")
    const [val2,setVal2] = useState("")
    const [val3,setVal3] = useState("")
    const [song,setSong] = useState("")
    const [album,setAlbum]=useState("")

let count = 0
    const fetchdata=async(e)=>{
        console.log(e.target.value)
        const url=`https://saavn.me/search/songs?query=${e.target.value}`;
        const url2=`https://saavn.me/search/albums?query=${e.target.value}`;
       let data=await axios.get(url);
       let dataa=await axios.get(url2);
       console.log(data)
       console.log(dataa);
       setVal(data) 
       setVal2(dataa) 
      }
    
    //   console.log(song)
       console.log(val2)
       const fetchSong=async(e)=>{
        console.log(e);
        const url=`https://saavn.me/search/songs?query=${e.name}`;
        let data=await axios.get(url);
        console.log(data);
        setVal3(data);
       }
    return(
        <div id="body">
            <div id="profile">
                <div id="person">
                    <img id="profilepic" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="person"/>
                    <h4 id="pname">SAI CHAITANYA</h4>
                    <p id="email">saichaitanya2512@gmail.com</p>
                </div>
                <div id="opt">
                    <ul>
                        <li><p class="opticon"><FiHome/></p> <p class="optname">Home</p></li>
                        <li><p class="opticon"><BiCategoryAlt/></p> <p class="optname">Browse</p></li>
                        <li><p class="opticon"><AiOutlineFileImage/></p> <p class="optname">Albums</p></li>
                        <li><p class="opticon"><RxPerson/></p> <p class="optname">Artists</p></li>
                    </ul>
                </div>
                <div id="mymusic">
                    <p id="mm">MY MUSIC</p>
                    <ul>
                        <li><p class="opticon"><MdAccessAlarm/></p> <p class="optname">Recently Played</p></li>
                        <li><p class="opticon"><AiOutlineFile/></p> <p class="optname">Local Files</p></li>
                        <li><p class="opticon"><RiPlayListFill/></p> <p class="optname">Playlists</p></li>
                        <li><p class="opticon"><FcLike/></p> <p class="optname">Liked Songs</p></li>
                    </ul>
                </div>
            </div>
            <div id="player">
                <div id="searchbar">
                    <input type="text" placeholder="Search for song, artists etc..." onChange={(e)=>fetchdata(e)}/>
                    <div id="set">
                        <p><AiOutlineBell/></p>
                        <p><FiSettings/></p>
                        <button id="plan">Upgrade Plan</button>
                    </div>
                </div>
                <div id="albums">
                    <h4>Billboard Topchart</h4>
                    <div id="albhold">
                    <div id="albimg">
                    {val2 ? val2.data.data.results.map((e)=>{
                    return(
                        <div className="albcard" onClick={()=>fetchSong(e)}><img className="simg" src={e.image[2].link} alt={e.name}/><p className="albname">{e.name}</p></div>
                    )
                }) : null}
                    </div>
                    </div>
                </div>
                <div id="sp">
                    <div id="songs">
                        <div id="mp"><h4>Most Popular</h4>
                        <p>Songs</p></div>
                        <div id="slist">
                        {val3 ? val3.data.data.results.map((e)=>{
                    return(
                        <div className="songcard" onClick={()=>setSong(e)}><p>{count+=1}</p><img className="soimg"src={e.image[2].link} alt=".."/><p className="piconsong"><BsFillPlayFill/></p><p className="cardsong">{e.name}</p><p className="wlicon"><BsFillSuitHeartFill/></p><p className="add"><AiOutlinePlusCircle/></p></div>
                    )
                }) : null}
                        </div>
                    </div>
                    <div id="play">
                        <div id="now">
                            <h4>Now Playing</h4>
                            <p>Items on the list</p>
                        </div>
                        <div id="soplay">
                            <img id="pimage" src={song ? song.image[2].link : null} alt=".."/>
                            <p id="psongname">{song ? song.name : null}</p>
                            <audio src={song ? song.downloadUrl[2].link : null} autoPlay controls/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Mp;