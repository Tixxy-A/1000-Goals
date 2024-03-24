import { useState } from "react";

import stat from '../Data/data'

export default function Game() {
    const [player, setPlayer] = useState(false);
    const [count, setCount] = useState(0);
    const [wild, setWild] = useState();
    const [select, setSelect] = useState(true);
    const [premeire, setPremeire] = useState({
        status: false,
        name: false,
        goal: false
    });
    const [laliga, setLaliga] = useState({
        status: false,
        name: false,
        goal: false
    });
    const [bundesliga, setBundesliga] = useState({
        status: false,
        name: false,
        goal: false
    });
    const [seriea, setSeriea] = useState({
        status: false,
        name: false,
        goal: false
    });
    const [ligue1, setLigue1] = useState({
        status: false,
        name: false,
        goal: false
    });
    const [national, setNational] = useState({
        status: false,
        name: false,
        goal: false
    });
    const [ucl, setUcl] = useState({
        status: false,
        name: false,
        goal: false
    });
    const [wildcard, setWildcard] = useState({
        status: false,
        name: false,
        goal: false
    });
    const [currentGoals, setCurrentGoals] = useState(0);
    const target = 1000;
    //console.log(wildcard.goal);
    function genratePlayer() {
        if(select){
            setPlayer(stat[Math.floor(Math.random() * stat.length)]);
            setSelect(false);
        }else{
            alert('please select a league');
        }

    }
    //console.log(wild);
    function handler1() {
        if (!player) {
            alert('please Genrate Player');
            return;
        }
        setSelect(true);
        setCount(prev => {
            return prev + 1;
        })
        setCurrentGoals(prev => {
            return prev + player.premeire
        })
        setPremeire({
            status: true,
            name: player.name,
            goal: player.premeire
        })
    }
    function handler2() {
        if (!player) {
            alert('please Genrate Player');
            return;
        }
        setSelect(true);

        setCount(prev => {
            return prev + 1;
        })
        setCurrentGoals(prev => {
            return prev + player.laliga
        })
        setLaliga({
            status: true,
            name: player.name,
            goal: player.laliga
        })
    } function handler3() {
        if (!player) {
            alert('please Genrate Player');
            return;
        }
        setSelect(true);

        setCount(prev => {
            return prev + 1;
        })
        setCurrentGoals(prev => {
            return prev + player.bundesliga
        })
        setBundesliga({
            status: true,
            name: player.name,
            goal: player.bundesliga
        })
    } function handler4() {
        if (!player) {
            alert('please Genrate Player');
            return;
        }
        setSelect(true);

        setCount(prev => {
            return prev + 1;
        })
        setCurrentGoals(prev => {
            return prev + player.seriea
        })
        setSeriea({
            status: true,
            name: player.name,
            goal: player.seriea
        })
    } function handler5() {
        if (!player) {
            alert('please Genrate Player');
            return;
        }
        setSelect(true);

        setCount(prev => {
            return prev + 1;
        })
        setCurrentGoals(prev => {
            return prev + player.ligue1
        })
        setLigue1({
            status: true,
            name: player.name,
            goal: player.ligue1
        })
    } function handler6() {
        if (!player) {
            alert('please Genrate Player');
            return;
        }
        setSelect(true);

        setCount(prev => {
            return prev + 1;
        })
        setCurrentGoals(prev => {
            return prev + player.ucl
        })
        setUcl({
            status: true,
            name: player.name,
            goal: player.ucl
        })
    } function handler7() {
        if (!player) {
            alert('please Genrate Player');
            return;
        }
        setSelect(true);

        setCount(prev => {
            return prev + 1;
        })
        setCurrentGoals(prev => {
            return prev + player.national
        })
        setNational({
            status: true,
            name: player.name,
            goal: player.national
        })
    }
    function handler8(e) {
        e.preventDefault();
        //console.log('hello');
       // console.log(wild);
        if (!player) {
            alert('please Genrate Player');
            return;
        }
        if (wild === 'wildcard') {
            alert('please select a league');
            return;
        }
        //console.log(player.wild)
        setSelect(true);

        setCount(prev => {
            return prev + 1;
        })
        if (wild === 'premeire') {
            setCurrentGoals(prev => {
                return prev + player.premeire
            })
            setWildcard({
                status: true,
                name: player.name,
                goal: player.premeire
            })
        }
        if (wild === 'laliga') {
            setCurrentGoals(prev => {
                return prev + player.laliga
            })
            setWildcard({
                status: true,
                name: player.name,
                goal: player.laliga
            })
        }
        if (wild === 'bundesliga') {
            setCurrentGoals(prev => {
                return prev + player.bundesliga
            })
            setWildcard({
                status: true,
                name: player.name,
                goal: player.bundesliga
            })
        }
        if (wild === 'seriea') {
            setCurrentGoals(prev => {
                return prev + player.seriea
            })
            setWildcard({
                status: true,
                name: player.name,
                goal: player.seriea
            })
        }
        if (wild === 'ucl') {
            setCurrentGoals(prev => {
                return prev + player.ucl
            })
            setWildcard({
                status: true,
                name: player.name,
                goal: player.ucl
            })
        }
        if (wild === 'ligue1') {
            setCurrentGoals(prev => {
                return prev + player.ligue1
            })
            setWildcard({
                status: true,
                name: player.name,
                goal: player.ligue1
            })
        }
        if (wild === 'national') {
            setCurrentGoals(prev => {
                return prev + player.national
            })
            setWildcard({
                status: true,
                name: player.name,
                goal: player.national
            })
        }

    }
    //console.log(count);
    function submit(e){
        //console.log('restart');
    }
    if (currentGoals >= target) {
        return (
            <div className="mt-6 flex justify-center gap-12 text-3xl font-bold text-green-500">
                YOU WIN {currentGoals} GOALS ACHIEVED
               
            </div>
        );
    }
    if (count === 8) {
        return (
            <div className="mt-6 flex justify-center gap-12 text-3xl font-bold text-red-700">
                YOU LOSE ONLY {currentGoals} GOALS ACHIEVED
               
            </div>
        );
    }

    return (
        <div className="mt-6 p-5">
            <div className="">
                <h1 className="text-2xl font-bold text-blue-400">Instructions</h1>
                <ul className="text-gray-500 text-xl leading-2">
                   <li>-You have 8 chances to randomly generate a player.</li>
                   <li>-Each time a player is generated, assign them to a league of your choice.</li>
                   <li>-The goals scored by that player in the chosen league will be added to your score.</li>
                   <li>-Once a league is used, it cannot be used again unless you use a wildcard.</li>
                   <li>-You have one wildcard that allows you to use a league twice.</li>
                   <li>-Keep track of the goals scored after each player assignment.</li>
                   <li>-Try to reach 1000 goals within the 8 chances.</li>
                </ul>
            </div>

            <div className="flex justify-center mt-5  ">
                <button className="flex justify-center gap-3 py-3 w-1/5 bg-gradient-to-r from-green-400  to-green-700 shadow-2xl rounded-3xl" onClick={genratePlayer}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                    <h1 className="text-xl">Pick Player</h1>
                </button>
            </div>
            {player &&
                <div>
                    <div className="flex justify-center mt-6">
                        <img className="w-2/5 h-90 object-contain rounded-full hover:scale-110 duration-300" src={player.photo} alt="fuck" />
                    </div>
                    <div className="flex justify-center mt-3">
                        <h1 className="text-3xl font-bold text-red-600">{player.name}</h1>
                    </div>


                </div>
            }
            <div className="flex justify-center mt-3">
                <h1 className="text-3xl font-bold text-red-600">Total: {currentGoals}</h1>
            </div>
            <div className="mt-5 grid grid-cols-2 place-items-center gap-5">
                <button disabled={premeire.status} onClick={handler1} className="flex justify-center w-2/3 gap-3 py-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%shadow-2xl rounded-3xl font-semibold text-xl disabled:opacity-30">
                    <div className="flex gap-4">
                        <p>Premeire League </p>
                        {premeire.status &&
                            <p className="text-white"> {premeire.name} {premeire.goal} Goals</p>
                        }
                    </div>
                </button>
                <button disabled={laliga.status} onClick={handler2} className="flex justify-center w-2/3 gap-3 py-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%shadow-2xl rounded-3xl font-semibold text-xl disabled:opacity-30">
                    <div className="flex gap-4">
                        <p>Laliga </p>
                        {laliga.status &&
                            <p className="text-white"> {laliga.name} {laliga.goal} Goals</p>
                        }
                    </div>
                </button>
                <button disabled={bundesliga.status} onClick={handler3} className="flex justify-center w-2/3 gap-3 py-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%shadow-2xl rounded-3xl font-semibold text-xl disabled:opacity-30">
                    <div className="flex gap-4">
                        <p>Bundesliga </p>
                        {bundesliga.status &&
                            <p className="text-white"> {bundesliga.name} {bundesliga.goal} Goals</p>
                        }
                    </div>
                </button>
                <button disabled={seriea.status} onClick={handler4} className="flex justify-center w-2/3 gap-3 py-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%shadow-2xl rounded-3xl font-semibold text-xl disabled:opacity-30">
                    <div className="flex gap-4">
                        <p>Serie-A </p>
                        {seriea.status &&
                            <p className="text-white"> {seriea.name} {seriea.goal} Goals</p>
                        }
                    </div>
                </button>
                <button disabled={ligue1.status} onClick={handler5} className="flex justify-center w-2/3 gap-3 py-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%shadow-2xl rounded-3xl font-semibold text-xl disabled:opacity-30">
                    <div className="flex gap-4">
                        <p>Ligue-1 </p>
                        {ligue1.status &&
                            <p className="text-white"> {ligue1.name} {ligue1.goal} Goals</p>
                        }
                    </div>
                </button>
                <button disabled={national.status} onClick={handler7} className="flex justify-center w-2/3 gap-3 py-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%shadow-2xl rounded-3xl font-semibold text-xl disabled:opacity-30"><div className="flex gap-4">
                    <p>National</p>
                    {national.status &&
                        <p className="text-white"> {national.name} {national.goal} Goals</p>
                    }
                </div></button>
                <button disabled={ucl.status} onClick={handler6} className="flex justify-center w-2/3 gap-3 py-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%shadow-2xl rounded-3xl font-semibold text-xl disabled:opacity-30">
                    <div className="flex gap-4">
                        <p>Champion League</p>
                        {ucl.status &&
                            <p className="text-white"> {ucl.name} {ucl.goal} Goals</p>
                        }
                    </div>
                </button>
                <form className="flex justify-center w-2/3 gap-3 ">
                    <select onSubmit={handler8} disabled={wildcard.status} val={wild} onChange={(e) => setWild(e.target.value)} className="flex justify-center text-center w-full gap-3 py-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%shadow-2xl rounded-3xl font-semibold text-xl disabled:opacity-30">
                        <option value="wildcard" className="bg-gray-700 text-white">Wildcard

                        </option>
                        <option value="premeire" className="bg-gray-700 text-white"><div className="flex gap-4 ">
                            <p>Premeire League</p>
                            {wildcard.status &&
                                <p className="text-white"> {wildcard.name} {wildcard.goal} Goals</p>
                            }
                        </div>

                        </option>
                        <option value="laliga" className="bg-gray-700 text-white"><div className="flex gap-4">
                            <p>LaLiga</p>
                            {wildcard.status &&
                                <p className="text-white"> {wildcard.name} {wildcard.goal} Goals</p>
                            }
                        </div>
                        </option>
                        <option value="bundesliga" className="bg-gray-700 text-white"><div className="flex gap-4">
                            <p>Bundesliga</p>
                            {wildcard.status &&
                                <p className="text-white"> {wildcard.name} {wildcard.goal} Goals</p>
                            }
                        </div>
                        </option>
                        <option value="seriea" className="bg-gray-700 text-white"><div className="flex gap-4">
                            <p>Serie-A</p>
                            {wildcard.status &&
                                <p className="text-white"> {wildcard.name} {wildcard.goal} Goals</p>
                            }
                        </div>
                        </option>
                        <option value="ligue1" className="bg-gray-700 text-white"><div className="flex gap-4">
                            <p>Ligue1</p>
                            {wildcard.status &&
                                <p className="text-white"> {wildcard.name} {wildcard.goal} Goals</p>
                            }
                        </div>
                        </option>
                        <option value="ucl" className="bg-gray-700 text-white"><div className="flex gap-4">
                            <p>Champion League</p>
                            {wildcard.status &&
                                <p className="text-white"> {wildcard.name} {wildcard.goal} Goals</p>
                            }
                        </div>
                        </option>
                        <option value="national" className="bg-gray-700 text-white"><div className="flex gap-4">
                            <p>National</p>
                            {wildcard.status &&
                                <p className="text-white"> {wildcard.name} {wildcard.goal} Goals</p>
                            }
                        </div>
                        </option>






                    </select>
                    <button className="text-white font-semibold bg-red-500 w-1/5 py-1 rounded-3xl" onClick={handler8} disabled={wildcard.status}>Select</button>
                </form>

            </div>
        </div>
    )
}