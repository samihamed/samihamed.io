import React, { Component } from 'react'

import '../styles/Tiles.css'

import github from '../assets/github.png'

const amountWeeks = 52
const amountDays = 7
const weeks: Array<any> = []

interface Props {}
interface State {
    weeks: Array<Array<any>>
}

const urls = [
    'https://github.com/samihamed/song-crawler',
    'https://github.com/samihamed/capoeira-chat',
    'https://github.com/samihamed/samihamed.io',
    'https://github.com/samihamed/stockoverflow',
    'https://github.com/samihamed/ping-machine',
    'https://github.com/samihamed/ng-me',
    'https://github.com/samihamed/til',
    'https://github.com/samihamed/kotlin-spring-boot',
    'https://github.com/samihamed/odinprojects'
]

export default class Tiles extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            weeks: []
        }
    }

    componentDidMount() {
        for (let i = 0; i < amountWeeks; i++) {
            weeks.push([])
        }

        weeks.forEach(week => {
            for (let j = 0; j < amountDays; j++) {
                const randomWhiteSpot = Math.floor(Math.random() * 7) === 3
                const randomWhiteSpot2 = Math.floor(Math.random() * 7) === 3
                const isActive = (j !== 0 && j !== 6) || randomWhiteSpot2
                week.push({
                    amount: 0,
                    classes: 'tile ' + (
                        isActive
                            ? (randomWhiteSpot ? 'inactive' : getRandomClass() + ' active-link')
                            : 'inactive'
                    ),
                    url: isActive
                        ? !randomWhiteSpot ? urls[Math.floor(Math.random() * (urls.length - 1))] : ''
                        : ''
                })
            }
        })

        function getRandomClass() {
            const classes = [
                'primary-tile',
                'primary-tile',
                'primary-tile',
                'primary-tile',
                'primary-tile',
                'primary-tile',
                'primary-tile',
                'primary-tile',
                'primary-tile',
                'secondary-tile',
                'secondary-tile',
                'secondary-tile',
                'secondary-tile',
                'secondary-tile',
                'tertiary-tile',
                'tertiary-tile'
            ]

            return classes[Math.floor(Math.random() * (classes.length - 1))]
        }

        this.setState({ weeks })
    }

    render() {
        return (
            <div style={{backgroundColor: '#e8e8e8'}}>
                <a className="normal-link" href="https://www.github.com/samihamed" rel="noopener noreferrer" target="_blank">
                    <img className="github-logo" alt="Github logo" src={ github }/>
                </a>
                <div className="Tiles">
                    { 
                        this.state.weeks.map(week => (
                            <div className="week" key={Math.random() * 600}>
                                {
                                    week.map(day => (
                                        <a className="unstyled-link" key={Math.random() * 999} href={day.url} rel="noopener noreferrer" target="_blank">
                                            <div className={day.classes}></div>
                                        </a>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
