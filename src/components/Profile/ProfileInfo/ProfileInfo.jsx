import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    
    if (!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            {/*<div>
                <img className={classes.img} src='http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_018.jpg'/>
            </div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;