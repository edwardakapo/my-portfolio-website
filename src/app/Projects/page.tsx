import React from 'react'
import PIcon from './projectIcon'


export default function Projects() {
  return (
    <div className='flex flex-wrap justify-center mb-10 items-center md:gap-y-5 md:gap-x-10 gap-x-3 gap-y-2 max-w-6xl'>
      <PIcon link = "https://github.com/edwardakapo/Bookstore-database-with-GUI" img="/Scenes/database.svg" desc='BookStore database with GUI'/>
      <PIcon link = "https://github.com/edwardakapo/Data-visualizer-with-React.js" img="/Scenes/vaccine.svg" desc='Covid 19 Data-Visualizer with React'/>
      <PIcon link = "https://github.com/edwardakapo/Movie-website-MEAN-" img="/Scenes/website.svg" desc='Mock Imbd website'/>
      <PIcon link = "https://github.com/edwardakapo/Implementing-Simple-and-Model-based-Ai-in-a-blackjack-game" img="/Scenes/Analysis.svg" desc='Blackjack AI agents'/>
      <PIcon link = "https://github.com/edwardakapo/AGILE-CES-simulator" img="/Scenes/medical.svg" desc='CES device Simulation'/>
      <PIcon link = "https://github.com/edwardakapo/OOP-ReportGenerator-in-cpp" img="/Scenes/report.svg" desc='Encapsulated Report generator in C++'/>
    </div>
  )
}
