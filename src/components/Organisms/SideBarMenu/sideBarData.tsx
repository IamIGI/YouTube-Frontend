import { BiHomeAlt, BiLike, BiMoviePlay } from 'react-icons/bi';
import { CgYoutube } from 'react-icons/cg';
import {
    MdOutlineSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
    MdOutlineLocalFireDepartment,
    MdOutlineMusicNote,
} from 'react-icons/md';
import { RiMovieLine } from 'react-icons/ri';
import { BsChevronDown, BsTrophy } from 'react-icons/bs';
import { HiSignal } from 'react-icons/hi2';
import { IoGameControllerOutline } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';

export const sideBarContent: { icon: JSX.Element; title: string }[] = [
    { icon: <BiHomeAlt />, title: 'Główna' },
    { icon: <CgYoutube />, title: 'Shorts' },
    { icon: <MdOutlineSubscriptions />, title: 'Subskrypcje' },
    { icon: <MdOutlineVideoLibrary />, title: 'Biblioteka' },
    { icon: <MdHistory />, title: 'Historia' },
    { icon: <RiMovieLine />, title: 'Twoje filmy' },
    { icon: <MdOutlineWatchLater />, title: 'Do obejrzenia' },
    { icon: <BiLike />, title: 'Polubione filmy' },
    { icon: <BsChevronDown />, title: 'Pokaz więcej ' },
];

export const sideBarDiscover: { icon: JSX.Element; title: string }[] = [
    { icon: <MdOutlineLocalFireDepartment />, title: 'Na czasie' },
    { icon: <MdOutlineMusicNote />, title: 'Muzyka' },
    { icon: <BiMoviePlay />, title: 'Filmy' },
    { icon: <HiSignal />, title: 'Na żywo' },
    { icon: <IoGameControllerOutline />, title: 'Gry' },
    { icon: <ImNewspaper />, title: 'Wiadomości' },
    { icon: <BsTrophy />, title: 'Sport' },
];
