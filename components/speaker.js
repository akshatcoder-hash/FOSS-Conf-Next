import React from 'react'

import PropTypes from 'prop-types'

const Speaker = (props) => {
  return (
    <>
      <div className={`speaker-speaker ${props.rootClassName} `}>
        <img alt="image" src={props.Image} className="speaker-image" />
        <div className="speaker-deails">
          <h3 className="speaker-name">{props.Name}</h3>
          <div className="speaker-position">
            <div className="speaker-point"></div>
            <span className="speaker-caption">{props.Detail}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .speaker-speaker {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .speaker-image {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .speaker-deails {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .speaker-name {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
          }
          .speaker-position {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .speaker-point {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .speaker-caption {
            font-size: 18px;
          }

          .speaker-root-class-name8 {
            max-width: 320px;
          }

          @media (max-width: 991px) {
            .speaker-name {
              font-size: 20px;
            }
            .speaker-point {
              margin-top: 4px;
            }
            .speaker-caption {
              font-size: 10px;
            }
          }
          @media (max-width: 767px) {
            .speaker-speaker {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .speaker-name {
              font-size: 14px;
            }
            .speaker-point {
              max-width: 20px;
              margin-top: 0px;
            }
            .speaker-caption {
              font-size: 10px;
            }
          }
          @media (max-width: 479px) {
            .speaker-point {
              width: 100%;
              max-width: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

Speaker.defaultProps = {
  Image: '/speakers-1-1500w.png',
  Name: 'Samantha Johnson',
  Detail: 'CEO, Opary',
  rootClassName: '',
}

Speaker.propTypes = {
  Image: PropTypes.string,
  Name: PropTypes.string,
  Detail: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Speaker
