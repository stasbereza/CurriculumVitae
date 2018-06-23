// Core
import React, { Component } from 'react';

//Components
import TopRow from './TopRow';
import BottomRow from './BottomRow';
import SkillSet from './SkillSet';
import WorkplaceSet from './WorkplaceSet';
import Contacts from './Contacts';
import Education from './Education';

export default class Content extends Component {
    render () {
        return (
            <div className = 'content'>
                <TopRow>
                    <SkillSet />
                    <WorkplaceSet />
                </TopRow>
                <BottomRow>
                    <Contacts />
                    <Education />
                </BottomRow>
            </div>
        );
    }
}
