import React from 'react';

import avatar from '../../assets/images/avatar.jpg';

import './index.scss';

const EventElement = ({
  event,
  isAdmin,
  isAuth,
  showModalFunction,
  showEventRegisteredModal,
}) => {
  const actionDescription = isAdmin || !isAuth ? 'Подробнее' : 'Подать заявку';
  return (
    <div className='event-element mb-4 row'>
      <div className='col-auto event-element-picture'>
        <div className='event-picture'><img src={avatar} alt="" /></div>
      </div>
      <div className='event-name align-middle col-8 col-sm-4 col-md-6'>{event.name}</div>
      <div className='event-date col'>{event.startDate}</div>
      <div className="event-more-btn col-auto">
        <div
          className='event-action btn btn-light event-action-btn'
          onClick={() => showModalFunction(event)}
        >
          {actionDescription}
        </div>
        {isAdmin && (
          <div
            className='event-action col btn btn-light'
            onClick={() => showEventRegisteredModal(event)}
          >
            {'Посещение'}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventElement;
