import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import SectionNumeral from '../components/section-numeral'
import Speaker from '../components/speaker'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>FOSS Conf</title>
          <meta property="og:title" content="FOSS Conf" />
        </Head>
        <section className="home-hero">
          <div className="home-background">
            <img
              alt="image"
              src="/circle-background.svg"
              className="home-image"
            />
            <img
              alt="image"
              src="/line-background.svg"
              className="home-image01"
            />
          </div>
          <header data-thq="thq-navbar" className="home-navbar">
            <h2 className="home-text">FOSS Conf</h2>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav"
              >
                <span className="navLink">Speakers</span>
                <span className="navLink">Schedule</span>
                <span className="navLink">Sponsors</span>
                <span className="navLink">Useful</span>
              </nav>
              <button className="button">
                <span>Register now</span>
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container01">
                  <h2 className="home-text02">OnConf</h2>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="navLink home-text03">About</span>
                  <span className="navLink home-text04">Features</span>
                  <span className="navLink home-text05">Pricing</span>
                  <span className="navLink home-text06">Team</span>
                  <span className="navLink home-text07">Blog</span>
                </nav>
                <div className="home-button-container">
                  <button className="home-login button">Login</button>
                  <button className="button home-register1">Register</button>
                </div>
                <div className="home-icon-group">
                  <div className="home-icons">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon06"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon08"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon10"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/quote-background.svg"
                className="home-background1"
              />
            </div>
          </header>
          <div className="home-hero-content">
            <h1 className="home-text08">
              World&apos;s Largest Online Conference
            </h1>
            <div className="home-caption">
              <button className="button-style-1 button home-register2">
                <span className="home-text09">Register now</span>
              </button>
              <p className="home-caption01">26th November 2023</p>
            </div>
          </div>
        </section>
        <section className="home-notes">
          <div className="home-first">
            <div data-aos="fade-up-right" className="home-content">
              <h2 className="home-header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h2>
              <div className="home-list">
                <div className="home-note">
                  <div className="home-point"></div>
                  <p className="home-text10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                <div className="home-note1">
                  <div className="home-point01"></div>
                  <p className="home-text11">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/notes-1-1400w.png"
              className="home-image02 image-notes"
            />
          </div>
          <div className="home-second">
            <div data-aos="fade-up-left" className="home-content01">
              <h2 className="home-header01">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              <button className="button button-style-2 home-register3">
                <span>Register now</span>
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </button>
            </div>
            <img alt="image" src="/notes-2-1400w.png" className="image-notes" />
          </div>
        </section>
        <section className="home-quote">
          <div className="home-content02">
            <h2 className="home-quoted">
              “I love lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliquaation ullamco 100%.”
            </h2>
            <div className="home-author">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                className="home-icon14"
              />
              <div className="home-details">
                <span className="home-name">Andy Smith</span>
                <span className="home-from">(Founder OnConf)</span>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/quote-background.svg"
            className="home-background2"
          />
          <img
            alt="image"
            src="/quote-background.svg"
            className="home-background3"
          />
        </section>
        <section className="home-speakers">
          <div className="home-header02">
            <SectionNumeral></SectionNumeral>
            <div data-aos="fade-right" className="home-heading">
              <h2 className="home-title">Speakers</h2>
              <p className="home-caption02">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="home-list1">
            <div className="home-row">
              <div className="speaker">
                <Speaker rootClassName="speaker-root-class-name"></Speaker>
                <Speaker
                  Image="/speakers-2-1500w.png"
                  rootClassName="speaker-root-class-name3"
                ></Speaker>
              </div>
              <div className="home-row02 speaker">
                <Speaker
                  Image="/speakers-3-1500w.png"
                  rootClassName="speaker-root-class-name2"
                ></Speaker>
                <Speaker
                  Image="/speakers-4-1500w.png"
                  rootClassName="speaker-root-class-name1"
                ></Speaker>
              </div>
            </div>
            <div className="home-row03">
              <div className="home-row04 speaker">
                <Speaker
                  Image="/speakers-4-1500w.png"
                  rootClassName="speaker-root-class-name13"
                ></Speaker>
                <Speaker
                  Image="/speakers-3-1500w.png"
                  rootClassName="speaker-root-class-name12"
                ></Speaker>
              </div>
              <div className="home-row05 speaker">
                <Speaker rootClassName="speaker-root-class-name10"></Speaker>
                <Speaker
                  Image="/speakers-2-1500w.png"
                  rootClassName="speaker-root-class-name11"
                ></Speaker>
              </div>
            </div>
            <div className="home-row06">
              <div className="home-row07 speaker">
                <Speaker
                  Image="/speakers-2-1500w.png"
                  rootClassName="speaker-root-class-name15"
                ></Speaker>
                <Speaker rootClassName="speaker-root-class-name14"></Speaker>
              </div>
              <div className="home-row08 speaker"></div>
            </div>
          </div>
        </section>
        <section className="home-watch">
          <div className="home-content03">
            <h2 className="home-header03">
              Watch our Watch our OnConf 2022 trailer
            </h2>
            <div className="home-video">
              <video
                src
                poster="/quotes-1-1400w.png"
                className="home-video1"
              ></video>
              <img alt="image" src="/play.svg" className="home-image04" />
            </div>
            <button className="button home-register4">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon15">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img
            alt="image"
            src="/trailer-background.svg"
            className="home-image05"
          />
        </section>
        <section className="home-schedule">
          <div className="home-content04">
            <div className="home-header04">
              <div className="home-section-numeral">
                <div className="home-divide"></div>
                <p className="home-text14">02</p>
              </div>
              <div data-aos="fade-right" className="home-heading1">
                <h2 className="home-title01">Schedule</h2>
                <p className="home-caption03">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="home-main">
              <div className="home-tab-selector">
                <div
                  data-role="schedule-select"
                  className="tab-active tab home-tab"
                >
                  <span className="home-text15">Friday, Nov 04</span>
                </div>
                <div data-role="schedule-select" className="tab home-tab1">
                  <span className="home-text16">Saturday, Nov 05</span>
                </div>
                <div data-role="schedule-select" className="tab home-tab2">
                  <span className="home-text17">Sunday, Nov 06</span>
                </div>
              </div>
              <div className="home-lists">
                <section data-role="schedule-content" className="home-list2">
                  <div className="home-element">
                    <div className="home-main01">
                      <span className="home-time">
                        8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                        time (6 Hours)
                      </span>
                      <h3 className="home-title02">Pre-event networking</h3>
                      <div className="home-author01">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon17"
                        />
                        <div className="home-details01">
                          <span className="home-name01">Andy Smith</span>
                          <div className="home-point02"></div>
                          <span className="home-caption04">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button">
                      Connect to chat room
                    </button>
                  </div>
                  <div className="home-element01">
                    <div className="home-main02">
                      <span className="home-time01">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title03">How to Lorem Ipsum.</h3>
                      <div className="home-author02">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon18"
                        />
                        <div className="home-details02">
                          <span className="home-name02">Samantha Johnson</span>
                          <div className="home-point03"></div>
                          <span className="home-caption05">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button01">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element02">
                    <div className="home-main03">
                      <span className="home-time02">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title04">How to Lorem Ipsum.</h3>
                      <div className="home-author03">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon19"
                        />
                        <div className="home-details03">
                          <span className="home-name03">Samantha Johnson</span>
                          <div className="home-point04"></div>
                          <span className="home-caption06">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button02">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element03">
                    <div className="home-main04">
                      <span className="home-time03">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title05">How to Lorem Ipsum.</h3>
                      <div className="home-author04">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon20"
                        />
                        <div className="home-details04">
                          <span className="home-name04">Samantha Johnson</span>
                          <div className="home-point05"></div>
                          <span className="home-caption07">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button03">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element04">
                    <div className="home-main05">
                      <span className="home-time04">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title06">How to Lorem Ipsum.</h3>
                      <div className="home-author05">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon21"
                        />
                        <div className="home-details05">
                          <span className="home-name05">Samantha Johnson</span>
                          <div className="home-point06"></div>
                          <span className="home-caption08">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button04">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element05">
                    <div className="home-main06">
                      <span className="home-time05">
                        8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your
                        local time (2 Hours)
                      </span>
                      <h3 className="home-title07">Post-event networking</h3>
                      <div className="home-author06">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon22"
                        />
                        <div className="home-details06">
                          <span className="home-name06">Samantha Johnson</span>
                          <div className="home-point07"></div>
                          <span className="home-caption09">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button05">
                      <span>
                        <span>Connect to chat room</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </section>
                <section data-role="schedule-content" className="home-list3">
                  <div className="home-element06">
                    <div className="home-main07">
                      <span className="home-time06">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title08">How to Lorem Ipsum.</h3>
                      <div className="home-author07">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon23"
                        />
                        <div className="home-details07">
                          <span className="home-name07">Samantha Johnson</span>
                          <div className="home-point08"></div>
                          <span className="home-caption10">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button06">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element07">
                    <div className="home-main08">
                      <span className="home-time07">
                        8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                        time (6 Hours)
                      </span>
                      <h3 className="home-title09">Pre-event networking</h3>
                      <div className="home-author08">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon24"
                        />
                        <div className="home-details08">
                          <span className="home-name08">Andy Smith</span>
                          <div className="home-point09"></div>
                          <span className="home-caption11">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button07">
                      Connect to chat room
                    </button>
                  </div>
                  <div className="home-element08">
                    <div className="home-main09">
                      <span className="home-time08">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title10">How to Lorem Ipsum.</h3>
                      <div className="home-author09">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon25"
                        />
                        <div className="home-details09">
                          <span className="home-name09">Samantha Johnson</span>
                          <div className="home-point10"></div>
                          <span className="home-caption12">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button08">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </section>
                <section data-role="schedule-content" className="home-list4">
                  <div className="home-element09">
                    <div className="home-main10">
                      <span className="home-time09">
                        8:00 AM - 2:00 PM GMT +1 / 10:00 AM - 4:00 PM Your local
                        time (6 Hours)
                      </span>
                      <h3 className="home-title11">Pre-event networking</h3>
                      <div className="home-author10">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon26"
                        />
                        <div className="home-details10">
                          <span className="home-name10">Andy Smith</span>
                          <div className="home-point11"></div>
                          <span className="home-caption13">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button09">
                      Connect to chat room
                    </button>
                  </div>
                  <div className="home-element10">
                    <div className="home-main11">
                      <span className="home-time10">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title12">How to Lorem Ipsum.</h3>
                      <div className="home-author11">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon27"
                        />
                        <div className="home-details11">
                          <span className="home-name11">Samantha Johnson</span>
                          <div className="home-point12"></div>
                          <span className="home-caption14">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button10">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element11">
                    <div className="home-main12">
                      <span className="home-time11">
                        3:00 PM - 3:30 PM GMT +1 / 5:00 PM - 5:30 PM Your local
                        time (30 Minutes)
                      </span>
                      <h3 className="home-title13">How to Lorem Ipsum.</h3>
                      <div className="home-author12">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon28"
                        />
                        <div className="home-details12">
                          <span className="home-name12">Samantha Johnson</span>
                          <div className="home-point13"></div>
                          <span className="home-caption15">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button11">
                      <span>
                        <span>See live</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                  <div className="home-element12">
                    <div className="home-main13">
                      <span className="home-time12">
                        8:00 PM - 10:00 PM GMT +1 / 10:00 PM - 12:00 AM Your
                        local time (2 Hours)
                      </span>
                      <h3 className="home-title14">Post-event networking</h3>
                      <div className="home-author13">
                        <img
                          alt="image"
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBvdHJhaXR8ZW58MHx8fHwxNjcxNDg1OTU2&amp;ixlib=rb-4.0.3&amp;w=200"
                          className="home-icon29"
                        />
                        <div className="home-details13">
                          <span className="home-name13">Samantha Johnson</span>
                          <div className="home-point14"></div>
                          <span className="home-caption16">CEO, Opary</span>
                        </div>
                      </div>
                    </div>
                    <button className="button home-button12">
                      <span>
                        <span>Connect to chat room</span>
                        <br></br>
                      </span>
                    </button>
                  </div>
                </section>
              </div>
              <div>
                <div className="home-container03">
                  <Script
                    html={`<script>
// Get all tab buttons
const tabButtons = document.querySelectorAll('[data-role="schedule-select"]');
// Get all tab contents
const tabContents = document.querySelectorAll('[data-role="schedule-content"]');

// Add "tab-active" class to the first tab button
tabButtons[0].classList.add("tab-active");
// Show the first tab content
tabContents[0].style.display = "block";

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    // Remove "tab-active" class from all tab buttons
    tabButtons.forEach((button) => {
      button.classList.remove("tab-active");
    });
    // Add "tab-active" class to the current tab button
    tabButton.classList.add("tab-active");
    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
    });
    // Show the tab content for the current tab button
    tabContents[index].style.display = "block";
  });
});
</script>`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-sponsors">
          <div className="home-header05">
            <div className="home-section-numeral1">
              <div className="home-divide1"></div>
              <p className="home-text48">03</p>
            </div>
            <div data-aos="fade-right" className="home-heading2">
              <h2 className="home-title15">Sponsors</h2>
              <p className="home-caption17">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="home-brands">
            <div className="brand">
              <img alt="image" src="/brand-1.svg" className="home-image06" />
            </div>
            <div className="brand home-brand1">
              <img alt="image" src="/brand-2.svg" className="home-image07" />
            </div>
            <div className="brand home-brand2">
              <img alt="image" src="/brand-3.svg" className="home-image08" />
            </div>
            <div className="home-brand3 brand">
              <img alt="image" src="/brand-4.svg" className="home-image09" />
            </div>
            <div className="home-brand4 brand">
              <img alt="image" src="/brand-5.svg" className="home-image10" />
            </div>
            <div className="home-brand5 brand">
              <img alt="image" src="/brand-6.svg" className="home-image11" />
            </div>
            <div className="home-brand6 brand">
              <img alt="image" src="/brand-7.svg" className="home-image12" />
            </div>
            <div className="home-brand7 brand">
              <img alt="image" src="/brand-8.svg" className="home-image13" />
            </div>
          </div>
        </section>
        <section className="home-why">
          <div className="home-header06">
            <div className="home-section-numeral2">
              <div className="home-divide2"></div>
              <p className="home-text49">04</p>
            </div>
            <div data-aos="fade-right" className="home-heading3">
              <h2 className="home-title16">Why OnConf</h2>
              <p className="home-caption18">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="home-brands1">
            <div className="home-row09">
              <div className="home-item">
                <img alt="image" src="/why-1.svg" className="home-image14" />
                <div className="home-details14">
                  <h3 className="home-title17">Networking</h3>
                  <p className="home-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="home-item1">
                <img alt="image" src="/why-2.svg" className="home-image15" />
                <div className="home-details15">
                  <h3 className="home-title18">Learning</h3>
                  <p className="home-description01">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="home-item2">
                <img alt="image" src="/why-3.svg" className="home-image16" />
                <div className="home-details16">
                  <h3 className="home-title19">Developing</h3>
                  <p className="home-description02">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-black">
          <img alt="image" src="/black-vector.svg" className="home-image17" />
          <section className="home-quotes">
            <div className="home-row10">
              <img
                alt="image"
                src="/quotes-1-1400w.png"
                className="home-image18"
              />
              <div className="home-row11">
                <div className="home-details17">
                  <p className="home-quote01">
                    “Lorem ipsum dolor sit amet consectetur “
                  </p>
                  <span className="home-author14">The Guard</span>
                </div>
                <img
                  alt="image"
                  src="/quotes-2-700w.png"
                  className="home-image19"
                />
              </div>
            </div>
            <div className="home-row12">
              <div className="home-details18">
                <p className="home-quote02">
                  “Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet“
                </p>
                <span className="home-author15">Wall Street News</span>
              </div>
              <img
                alt="image"
                src="/quotes-3-1400w.png"
                className="home-image20"
              />
              <div className="home-details19">
                <p className="home-quote03">
                  “Duis aute irure dolor in reprehenderit in voluptate velit “
                </p>
                <span className="home-author16">Inside Business</span>
              </div>
            </div>
          </section>
          <section className="home-testimonials">
            <div className="home-header07">
              <div className="home-section-numeral3">
                <div className="home-divide3"></div>
                <p className="home-text50">05</p>
              </div>
              <div data-aos="fade-right" className="home-heading4">
                <h2 className="home-title20">
                  Don’t just take our word for it. Here’s what past attendees
                  have to say:
                </h2>
              </div>
            </div>
            <div id="scrollbar" className="home-quotes1">
              <div className="home-quote04">
                <div className="home-author17">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image21"
                  />
                  <div className="home-details20">
                    <span className="home-name14">Samantha Johnson</span>
                    <span className="home-handle">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote05">
                  “Duis aute irure dolor in reprehenderit in voluptate velit.”
                </p>
              </div>
              <div className="home-quote06">
                <div className="home-author18">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image22"
                  />
                  <div className="home-details21">
                    <span className="home-name15">Samantha Johnson</span>
                    <span className="home-handle1">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote07">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ”
                </p>
              </div>
              <div className="home-quote08">
                <div className="home-author19">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image23"
                  />
                  <div className="home-details22">
                    <span className="home-name16">Samantha Johnson</span>
                    <span className="home-handle2">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote09">
                  “Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea.”
                </p>
              </div>
              <div className="home-quote10">
                <div className="home-author20">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image24"
                  />
                  <div className="home-details23">
                    <span className="home-name17">Samantha Johnson</span>
                    <span className="home-handle3">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote11">
                  “Duis aute irure dolor in reprehenderit in voluptate velit.”
                </p>
              </div>
              <div className="home-quote12">
                <div className="home-author21">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1603771550805-abcf98e420e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxwb3RyYWl0fGVufDB8fHx8MTY3MTQ4NTk1Ng&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image25"
                  />
                  <div className="home-details24">
                    <span className="home-name18">Samantha Johnson</span>
                    <span className="home-handle4">@thisissammy</span>
                  </div>
                </div>
                <p className="home-quote13">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ”
                </p>
              </div>
            </div>
          </section>
          <section className="home-join">
            <h2 className="home-title21">
              Join us at OnConf on November 22-24
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <button className="home-button13 button">
              <span>
                <span>Register now</span>
                <br></br>
              </span>
            </button>
          </section>
          <section className="home-more">
            <div className="home-header08">
              <div className="home-section-numeral4">
                <div className="home-divide4"></div>
                <p className="home-text54">06</p>
              </div>
              <div data-aos="fade-right" className="home-heading5">
                <h2 className="home-title22">
                  More about pricing, accessibility or what this year’s event
                  includes
                </h2>
              </div>
            </div>
            <div className="home-accordions">
              <div className="home-accordion">
                <div className="home-header09">
                  <div className="home-divide5"></div>
                  <h3 className="home-title23">Event information</h3>
                </div>
                <div className="home-items">
                  <div
                    data-role="accordion-container"
                    className="home-element13 accordion"
                  >
                    <div className="home-content05">
                      <span className="home-header10">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description03"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon30"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon32"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-role="accordion-container"
                    className="home-element14 accordion"
                  >
                    <div className="home-content06">
                      <span className="home-header11">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description04"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container1">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon34"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon36"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-role="accordion-container"
                    className="home-element15 accordion"
                  >
                    <div className="home-content07">
                      <span className="home-header12">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description05"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container2">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon38"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon40"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-accordion1">
                <div className="home-header13">
                  <div className="home-divide6"></div>
                  <h3 className="home-title24">Event information</h3>
                </div>
                <div className="home-items1">
                  <div
                    data-role="accordion-container"
                    className="home-element16 accordion"
                  >
                    <div className="home-content08">
                      <span className="home-header14">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description06"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container3">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon42"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon44"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-role="accordion-container"
                    className="home-element17 accordion"
                  >
                    <div className="home-content09">
                      <span className="home-header15">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description07"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container4">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon46"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon48"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-role="accordion-container"
                    className="home-element18 accordion"
                  >
                    <div className="home-content10">
                      <span className="home-header16">
                        Esse cillum dolore eu fugiat nulla pariatur.
                      </span>
                      <span
                        data-role="accordion-content"
                        className="home-description08"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <div className="home-icon-container5">
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-closed"
                        className="home-icon50"
                      >
                        <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        data-role="accordion-icon-open"
                        className="home-icon52"
                      >
                        <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="home-container05">
                  <Script
                    html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                  ></Script>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="home-subscribe">
          <div className="home-main14">
            <h2 className="home-header17">
              Subscribe to our newsletter for the latest OnConf news
            </h2>
            <div className="home-content11">
              <div className="home-inputs">
                <input
                  type="text"
                  required
                  placeholder="Name *"
                  autoComplete="name"
                  className="home-textinput input"
                />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  autoComplete="email"
                  className="home-textinput1 input"
                />
              </div>
              <span className="home-text55">
                By submitting, you agree to receive email communications from
                OnConf, including upcoming promotions and discounted tickets,
                news, and access to exclusive invite-only events.
              </span>
              <button className="home-button14 button">
                <span>
                  <span>Sign up for our newsletter</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-content12">
            <div className="home-details25">
              <h2 className="home-title25">OnConf</h2>
              <p className="home-description09">
                Product Calgary brings professionals together to connect, learn
                from each other, find opportunities, and find talent. We started
                as a meetup and have grown to be Alberta’s largest Product
                Management community.
              </p>
            </div>
            <div className="home-socials">
              <img alt="image" src="/linkedin.svg" className="social" />
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <img
                  alt="image"
                  src="/instagram.svg"
                  className="home-image27 social"
                />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <img
                  alt="image"
                  src="/twitter.svg"
                  className="home-image28 social"
                />
              </a>
            </div>
            <span className="home-copyright">
              Privacy — Terms &amp; Conditions — Code of Conduct © 2022 OnConf
              All Rights Reserved
            </span>
          </div>
        </footer>
        <div>
          <div className="home-container07">
            <Script
              html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container09">
            <Script
              html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 85vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/grainy-1500w.png');
            background-position: center;
          }
          .home-background {
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 85%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            right: 0px;
            bottom: 0px;
            height: 90%;
            position: absolute;
            object-fit: cover;
          }
          .home-image01 {
            height: 100%;
            z-index: 100;
            object-fit: cover;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-text {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .home-desktop-menu {
            gap: var(--dl-space-space-threeunits);
            display: flex;
          }
          .home-nav {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon {
            width: 16px;
            height: 16px;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-nav1 {
            display: flex;
            z-index: 20;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-text02 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-button-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
            z-index: 20;
          }
          .home-icons {
            display: flex;
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-background1 {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-hero-content {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1000px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text08 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
          }
          .home-caption {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text09 {
            width: 100%;
            font-size: 24px;
            max-width: 85px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 24px;
          }
          .home-caption01 {
            color: rgb(255, 255, 255);
            font-size: 32px;
          }
          .home-notes {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-first {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-header {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-list {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-note {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-point {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .home-text10 {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .home-note1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-point01 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .home-text11 {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .home-image02 {
            width: 50%;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-second {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }
          .home-content01 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-header01 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-icon12 {
            width: 16px;
            height: 16px;
          }
          .home-quote {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #aa82ff;
          }
          .home-content02 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1000px;
            align-items: center;
            flex-direction: column;
          }
          .home-quoted {
            font-size: 40px;
            font-style: italic;
            text-align: center;
            font-weight: 600;
            line-height: 60px;
          }
          .home-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon14 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-name {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
          }
          .home-from {
            font-size: 18px;
            font-style: italic;
            font-weight: 400;
            line-height: 27px;
          }
          .home-background2 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-background3 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-speakers {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header02 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title {
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption02 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-list1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row02 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row03 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row04 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row05 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row06 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row07 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row08 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-watch {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #aa82ff;
          }
          .home-content03 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-header03 {
            font-size: 50px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 60px;
          }
          .home-video {
            width: 100%;
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-video1 {
            width: 100%;
            transition: 0.3s;
          }
          .home-video1:hover {
            box-shadow: 0px 0px 30px 0px #000000;
          }
          .home-image04 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 80px;
            bottom: 0px;
            cursor: pointer;
            margin: auto;
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
          }
          .home-image04:hover {
            width: 90px;
          }
          .home-icon15 {
            width: 16px;
            height: 16px;
          }
          .home-image05 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-schedule {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 200px;
            background-size: cover;
            justify-content: center;
            background-image: url('/grainy-1500w.png');
          }
          .home-content04 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-header04 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-text14 {
            color: rgb(255, 255, 255);
          }
          .home-heading1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title01 {
            color: #ffffff;
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption03 {
            color: #ffffff;
            font-size: 18px;
            line-height: 27px;
          }
          .home-main {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-tab-selector {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-bottom-width: 1px;
          }
          .home-text15 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
          .home-text16 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
          .home-text17 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 21px;
          }
          .home-lists {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-list2 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main01 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title02 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author01 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon17 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details01 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name01 {
            width: 100%;
            font-style: normal;
            font-weight: 600;
          }
          .home-point02 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-caption04 {
            width: 100%;
          }
          .home-element01 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main02 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time01 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title03 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon18 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details02 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name02 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point03 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element02 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main03 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time02 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title04 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon19 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details03 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name03 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point04 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element03 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main04 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time03 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title05 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon20 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details04 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name04 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point05 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element04 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main05 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time04 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title06 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author05 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon21 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details05 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name05 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point06 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element05 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main06 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time05 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title07 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author06 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon22 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details06 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name06 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point07 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-list3 {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element06 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main07 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time06 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title08 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author07 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon23 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details07 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name07 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point08 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main08 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time07 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title09 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author08 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon24 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details08 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name08 {
            width: 100%;
            font-style: normal;
            font-weight: 600;
          }
          .home-point09 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-caption11 {
            width: 100%;
          }
          .home-element08 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main09 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time08 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title10 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author09 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon25 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details09 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name09 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point10 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-list4 {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element09 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main10 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time09 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title11 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author10 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon26 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details10 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name10 {
            width: 100%;
            font-style: normal;
            font-weight: 600;
          }
          .home-point11 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-caption13 {
            width: 100%;
          }
          .home-element10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main11 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time10 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title12 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author11 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon27 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details11 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name11 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point12 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main12 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time11 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title13 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon28 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details12 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name12 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point13 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-element12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-main13 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-time12 {
            font-size: 15px;
            letter-spacing: 2%;
          }
          .home-title14 {
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 2%;
          }
          .home-author13 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
          }
          .home-icon29 {
            width: 40px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details13 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-name13 {
            font-style: normal;
            font-weight: 600;
          }
          .home-point14 {
            width: 100%;
            height: 1px;
            display: flex;
            max-width: 40px;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: rgba(255, 255, 255, 0.2);
          }
          .home-container03 {
            display: contents;
          }
          .home-sponsors {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header05 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide1 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .home-heading2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title15 {
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption17 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-brands {
            width: 100%;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(4, 1fr);
          }
          .home-image06 {
            object-fit: cover;
          }
          .home-image07 {
            object-fit: cover;
          }
          .home-image08 {
            object-fit: cover;
          }
          .home-brand3 {
            border-right-width: 0px;
          }
          .home-image09 {
            object-fit: cover;
          }
          .home-brand4 {
            border-top-width: 1px;
          }
          .home-image10 {
            object-fit: cover;
          }
          .home-brand5 {
            border-top-width: 1px;
          }
          .home-image11 {
            object-fit: cover;
          }
          .home-brand6 {
            border-top-width: 1px;
          }
          .home-image12 {
            object-fit: cover;
          }
          .home-brand7 {
            border-top-width: 1px;
            border-right-width: 0px;
          }
          .home-image13 {
            object-fit: cover;
          }
          .home-why {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header06 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide2 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #000000;
          }
          .home-heading3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title16 {
            font-size: 90px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption18 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-brands1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row09 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-item {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image14 {
            height: 200px;
            object-fit: cover;
          }
          .home-details14 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title17 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description {
            font-size: 18px;
            line-height: 27px;
          }
          .home-item1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image15 {
            height: 200px;
            object-fit: cover;
          }
          .home-details15 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title18 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description01 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-item2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image16 {
            height: 200px;
            object-fit: cover;
          }
          .home-details16 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title19 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description02 {
            font-size: 18px;
            line-height: 27px;
          }
          .home-black {
            gap: 120px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/grainy-1500w.png');
          }
          .home-image17 {
            top: 0px;
            left: 0px;
            bottom: 0px;
            height: 650px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-quotes {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-row10 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image18 {
            height: 320px;
            object-fit: cover;
          }
          .home-row11 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-details17 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-quote01 {
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-author14 {
            font-size: 24px;
            max-width: 35%;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-image19 {
            height: 320px;
            object-fit: cover;
          }
          .home-row12 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-details18 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-quote02 {
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-author15 {
            font-size: 24px;
            max-width: 50%;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-image20 {
            height: 320px;
            object-fit: cover;
          }
          .home-details19 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-quote03 {
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-author16 {
            font-size: 24px;
            max-width: 35%;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
            letter-spacing: 1%;
          }
          .home-testimonials {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-header07 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-section-numeral3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide3 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-heading4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title20 {
            font-size: 50px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 55px;
          }
          .home-quotes1 {
            width: 100%;
            display: flex;
            overflow: auto;
            max-width: var(--dl-size-size-maxwidth);
            align-items: stretch;
            margin-left: max(0px, (100% - 1240px)/2);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-bottom-width: 1px;
          }
          .home-quote04 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image21 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details20 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name14 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote05 {
            color: #ffffff;
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote06 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image22 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details21 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name15 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle1 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote07 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote08 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image23 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details22 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name16 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle2 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote09 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author20 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image24 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details23 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name17 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle3 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote11 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-quote12 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            min-width: 370px;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-author21 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image25 {
            width: 60px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-details24 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name18 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            letter-spacing: 1%;
          }
          .home-handle4 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            letter-spacing: 1%;
          }
          .home-quote13 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 28px;
            max-width: 320px;
            line-height: 33px;
            letter-spacing: 1%;
          }
          .home-join {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-title21 {
            color: #ffffff;
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-button13 {
            align-self: flex-start;
            background-color: rgb(170, 130, 255);
          }
          .home-more {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-header08 {
            gap: var(--dl-space-space-oneandhalfunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-section-numeral4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide4 {
            width: 100px;
            height: 1px;
            display: flex;
            margin-top: 4px;
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-heading5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title22 {
            font-size: 50px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 55px;
          }
          .home-accordions {
            gap: var(--dl-space-space-fourunits);
            color: white;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-accordion {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header09 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide5 {
            width: 40px;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-title23 {
            font-size: 40px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 44px;
          }
          .home-items {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element13 {
            align-items: flex-start;
          }
          .home-content05 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header10 {
            font-size: 24px;
          }
          .home-description03 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container {
            position: relative;
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon30 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon32 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element14 {
            align-items: flex-start;
          }
          .home-content06 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header11 {
            font-size: 24px;
          }
          .home-description04 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon34 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon36 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element15 {
            align-items: flex-start;
          }
          .home-content07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            font-size: 24px;
          }
          .home-description05 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon38 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon40 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-accordion1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header13 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-divide6 {
            width: 40px;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: row;
            background-color: #ffffff;
          }
          .home-title24 {
            font-size: 40px;
            max-width: 900px;
            font-style: normal;
            font-weight: 600;
            line-height: 44px;
          }
          .home-items1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-element16 {
            align-items: flex-start;
          }
          .home-content08 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header14 {
            font-size: 24px;
          }
          .home-description06 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon42 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon44 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element17 {
            align-items: flex-start;
          }
          .home-content09 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header15 {
            font-size: 24px;
          }
          .home-description07 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container4 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon46 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon48 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element18 {
            align-items: flex-start;
          }
          .home-content10 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header16 {
            font-size: 24px;
          }
          .home-description08 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container5 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon50 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon52 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-container05 {
            display: contents;
          }
          .home-subscribe {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-main14 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header17 {
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 55px;
          }
          .home-content11 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-inputs {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-textinput {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
            padding-top: 0px;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 0px;
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-textinput1 {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
            padding-top: 0px;
            border-color: rgba(0, 0, 0, 0.2);
            border-width: 0px;
            padding-left: 0px;
            border-radius: 0px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-text55 {
            font-size: 14px;
          }
          .home-button14 {
            align-self: flex-start;
            background-color: rgb(170, 130, 255);
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: #aa82ff;
          }
          .home-content12 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-details25 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-title25 {
            width: 100%;
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 45px;
          }
          .home-description09 {
            width: 100%;
            font-size: 18px;
            line-height: 27px;
          }
          .home-socials {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: row;
          }
          .home-link4 {
            display: contents;
          }
          .home-image27 {
            text-decoration: none;
          }
          .home-link5 {
            display: contents;
          }
          .home-image28 {
            text-decoration: none;
          }
          .home-copyright {
            width: 100%;
            font-size: 14px;
            line-height: 21px;
          }
          .home-container07 {
            display: contents;
          }
          .home-container09 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-text09 {
              font-size: 24px;
              font-style: normal;
              font-weight: 600;
              line-height: 24px;
            }
            .home-first {
              flex-direction: column;
            }
            .home-content {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-image02 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-second {
              flex-direction: column;
            }
            .home-content01 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-point02 {
              margin-top: 4px;
            }
            .home-caption04 {
              font-size: 10px;
            }
            .home-point03 {
              margin-top: 4px;
            }
            .home-caption05 {
              font-size: 10px;
            }
            .home-point04 {
              margin-top: 4px;
            }
            .home-caption06 {
              font-size: 10px;
            }
            .home-point05 {
              margin-top: 4px;
            }
            .home-caption07 {
              font-size: 10px;
            }
            .home-point06 {
              margin-top: 4px;
            }
            .home-caption08 {
              font-size: 10px;
            }
            .home-point07 {
              margin-top: 4px;
            }
            .home-caption09 {
              font-size: 10px;
            }
            .home-point08 {
              margin-top: 4px;
            }
            .home-caption10 {
              font-size: 10px;
            }
            .home-point09 {
              margin-top: 4px;
            }
            .home-caption11 {
              font-size: 10px;
            }
            .home-point10 {
              margin-top: 4px;
            }
            .home-caption12 {
              font-size: 10px;
            }
            .home-point11 {
              margin-top: 4px;
            }
            .home-caption13 {
              font-size: 10px;
            }
            .home-point12 {
              margin-top: 4px;
            }
            .home-caption14 {
              font-size: 10px;
            }
            .home-point13 {
              margin-top: 4px;
            }
            .home-caption15 {
              font-size: 10px;
            }
            .home-point14 {
              margin-top: 4px;
            }
            .home-caption16 {
              font-size: 10px;
            }
            .home-brands {
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(2, 1fr);
            }
            .home-brand1 {
              border-right-width: 0px;
            }
            .home-brand2 {
              border-top-width: 1px;
            }
            .home-brand3 {
              border-top-width: 1px;
            }
            .home-brand5 {
              border-right-width: 0px;
            }
            .home-row10 {
              flex-direction: column;
            }
            .home-image18 {
              width: 100%;
            }
            .home-details17 {
              width: 50%;
            }
            .home-image19 {
              width: 50%;
            }
            .home-row12 {
              border-bottom-width: 0px;
            }
            .home-details18 {
              display: none;
            }
            .home-image20 {
              width: 50%;
              aspect-ratio: 1;
            }
            .home-details19 {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 60vh;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon02 {
              fill: white;
            }
            .home-nav1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text02 {
              color: #000000;
            }
            .home-nav2 {
              gap: var(--dl-space-space-unit);
            }
            .home-text03 {
              color: #000000;
            }
            .home-text04 {
              color: rgb(0, 0, 0);
            }
            .home-text05 {
              color: rgb(0, 0, 0);
            }
            .home-text06 {
              color: rgb(0, 0, 0);
            }
            .home-text07 {
              color: rgb(0, 0, 0);
            }
            .home-button-container {
              gap: var(--dl-space-space-unit);
              width: 50%;
              margin-top: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-login {
              width: 100%;
              border-width: 1px;
              margin-right: 0px;
            }
            .home-register1 {
              width: 100%;
              border-width: 1px;
            }
            .home-icon-group {
              width: 100%;
              justify-content: flex-start;
            }
            .home-hero-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-caption {
              gap: var(--dl-space-space-unit);
            }
            .home-register2 {
              padding: var(--dl-space-space-halfunit);
            }
            .home-text09 {
              font-size: 18px;
              line-height: 18px;
            }
            .home-caption01 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content01 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-register3 {
              width: 100%;
            }
            .home-quote {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-quoted {
              font-size: 20px;
              line-height: 30px;
            }
            .home-speakers {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-title {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption02 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-row {
              flex-direction: column;
            }
            .home-row03 {
              flex-direction: column;
            }
            .home-row06 {
              flex-direction: column;
            }
            .home-watch {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content03 {
              gap: var(--dl-space-space-oneandhalfunits);
              max-width: 900px;
            }
            .home-header03 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-image04 {
              width: 40px;
            }
            .home-register4 {
              width: 100%;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-image05 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .home-schedule {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content04 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-divide {
              width: 50px;
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-title01 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption03 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-tab-selector {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-tab {
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text15 {
              font-size: 16px;
            }
            .home-tab1 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text16 {
              font-size: 16px;
            }
            .home-tab2 {
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text17 {
              font-size: 16px;
            }
            .home-main01 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time {
              font-size: 10px;
            }
            .home-title02 {
              font-size: 18px;
            }
            .home-point02 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption04 {
              font-size: 10px;
            }
            .home-main02 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time01 {
              font-size: 10px;
            }
            .home-title03 {
              font-size: 18px;
            }
            .home-icon18 {
              width: 25px;
            }
            .home-details02 {
              align-items: center;
            }
            .home-name02 {
              font-size: 10px;
            }
            .home-point03 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption05 {
              font-size: 10px;
            }
            .home-main03 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time02 {
              font-size: 10px;
            }
            .home-title04 {
              font-size: 18px;
            }
            .home-icon19 {
              width: 25px;
            }
            .home-details03 {
              align-items: center;
            }
            .home-name03 {
              font-size: 10px;
            }
            .home-point04 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption06 {
              font-size: 10px;
            }
            .home-main04 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time03 {
              font-size: 10px;
            }
            .home-title05 {
              font-size: 18px;
            }
            .home-icon20 {
              width: 25px;
            }
            .home-details04 {
              align-items: center;
            }
            .home-name04 {
              font-size: 10px;
            }
            .home-point05 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption07 {
              font-size: 10px;
            }
            .home-main05 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time04 {
              font-size: 10px;
            }
            .home-title06 {
              font-size: 18px;
            }
            .home-icon21 {
              width: 25px;
            }
            .home-details05 {
              align-items: center;
            }
            .home-name05 {
              font-size: 10px;
            }
            .home-point06 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption08 {
              font-size: 10px;
            }
            .home-main06 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time05 {
              font-size: 10px;
            }
            .home-title07 {
              font-size: 18px;
            }
            .home-point07 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption09 {
              font-size: 10px;
            }
            .home-main07 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time06 {
              font-size: 10px;
            }
            .home-title08 {
              font-size: 18px;
            }
            .home-icon23 {
              width: 25px;
            }
            .home-details07 {
              align-items: center;
            }
            .home-name07 {
              font-size: 10px;
            }
            .home-point08 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption10 {
              font-size: 10px;
            }
            .home-main08 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time07 {
              font-size: 10px;
            }
            .home-title09 {
              font-size: 18px;
            }
            .home-point09 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption11 {
              font-size: 10px;
            }
            .home-main09 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time08 {
              font-size: 10px;
            }
            .home-title10 {
              font-size: 18px;
            }
            .home-icon25 {
              width: 25px;
            }
            .home-details09 {
              align-items: center;
            }
            .home-name09 {
              font-size: 10px;
            }
            .home-point10 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption12 {
              font-size: 10px;
            }
            .home-main10 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time09 {
              font-size: 10px;
            }
            .home-title11 {
              font-size: 18px;
            }
            .home-point11 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption13 {
              font-size: 10px;
            }
            .home-main11 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time10 {
              font-size: 10px;
            }
            .home-title12 {
              font-size: 18px;
            }
            .home-icon27 {
              width: 25px;
            }
            .home-details11 {
              align-items: center;
            }
            .home-name11 {
              font-size: 10px;
            }
            .home-point12 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption14 {
              font-size: 10px;
            }
            .home-main12 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time11 {
              font-size: 10px;
            }
            .home-title13 {
              font-size: 18px;
            }
            .home-icon28 {
              width: 25px;
            }
            .home-details12 {
              align-items: center;
            }
            .home-name12 {
              font-size: 10px;
            }
            .home-point13 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption15 {
              font-size: 10px;
            }
            .home-main13 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-time12 {
              font-size: 10px;
            }
            .home-title14 {
              font-size: 18px;
            }
            .home-point14 {
              max-width: 20px;
              margin-top: 0px;
            }
            .home-caption16 {
              font-size: 10px;
            }
            .home-sponsors {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-divide1 {
              width: 50px;
            }
            .home-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .home-title15 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption17 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-why {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-divide2 {
              width: 50px;
            }
            .home-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home-title16 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption18 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-row09 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-item {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image14 {
              height: 60px;
            }
            .home-details14 {
              gap: var(--dl-space-space-unit);
            }
            .home-title17 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-item1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image15 {
              height: 60px;
            }
            .home-details15 {
              gap: var(--dl-space-space-unit);
            }
            .home-title18 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description01 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-item2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image16 {
              height: 60px;
            }
            .home-details16 {
              gap: var(--dl-space-space-unit);
            }
            .home-title19 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description02 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-black {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-image17 {
              display: none;
            }
            .home-quotes {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-quote01 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote02 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote03 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-testimonials {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
            }
            .home-header07 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-divide3 {
              width: 50px;
            }
            .home-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home-title20 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-quotes1 {
              margin-left: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-quote04 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-author17 {
              width: 100%;
            }
            .home-image21 {
              width: 40px;
            }
            .home-details20 {
              flex: 1;
            }
            .home-name14 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote05 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote06 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-author18 {
              width: 100%;
            }
            .home-image22 {
              width: 40px;
            }
            .home-details21 {
              flex: 1;
            }
            .home-name15 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle1 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote07 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote08 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-author19 {
              width: 100%;
            }
            .home-image23 {
              width: 40px;
            }
            .home-details22 {
              flex: 1;
            }
            .home-name16 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-handle2 {
              width: 90%;
              font-size: 14px;
              line-height: 16px;
            }
            .home-quote09 {
              width: 90%;
              font-size: 16px;
              line-height: 20px;
            }
            .home-quote10 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-name17 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-handle3 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote11 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote12 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              min-width: 100%;
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-name18 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-handle4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-quote13 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-join {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-title21 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-button13 {
              width: 100%;
              align-self: center;
            }
            .home-more {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: 0px;
            }
            .home-divide4 {
              width: 50px;
            }
            .home-heading5 {
              gap: var(--dl-space-space-unit);
            }
            .home-title22 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-title23 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-element14 {
              align-items: flex-start;
            }
            .home-title24 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-element16 {
              align-items: flex-start;
            }
            .home-element17 {
              align-items: flex-start;
            }
            .home-element18 {
              align-items: flex-start;
            }
            .home-subscribe {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main14 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-header17 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-content11 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-inputs {
              gap: var(--dl-space-space-twounits);
            }
            .home-textinput {
              font-size: 16px;
              line-height: 24px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-textinput1 {
              font-size: 16px;
              line-height: 24px;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text55 {
              font-size: 10px;
            }
            .home-button14 {
              width: 100%;
            }
            .home-footer {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-content12 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-title25 {
              font-size: 24px;
              line-height: 34px;
            }
            .home-description09 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-socials {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-mobile-menu {
              padding: 16px;
            }
            .home-button-container {
              width: 100%;
            }
            .home-icon-group {
              justify-content: center;
            }
            .home-text08 {
              font-size: 50px;
            }
            .home-header {
              font-size: 30px;
              line-height: 36px;
            }
            .home-list {
              gap: var(--dl-space-space-unit);
            }
            .home-point {
              width: 100%;
              max-width: 20px;
            }
            .home-text10 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point01 {
              width: 100%;
              max-width: 20px;
            }
            .home-text11 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-content01 {
              gap: var(--dl-space-space-twounits);
            }
            .home-header01 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-content02 {
              gap: var(--dl-space-space-twounits);
            }
            .home-author {
              flex-direction: column;
            }
            .home-details {
              gap: 4px;
              flex-direction: column;
            }
            .home-name {
              font-size: 16px;
              line-height: 24px;
            }
            .home-from {
              font-size: 16px;
              line-height: 24px;
            }
            .home-divide {
              width: 20px;
            }
            .home-text14 {
              font-size: 12px;
              line-height: 13px;
            }
            .home-tab {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-tab1 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-tab2 {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-details01 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name01 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point02 {
              width: 100%;
              max-width: 20px;
            }
            .home-button {
              display: none;
            }
            .home-author02 {
              width: 100%;
            }
            .home-icon18 {
              display: none;
            }
            .home-button01 {
              display: none;
            }
            .home-author03 {
              width: 100%;
            }
            .home-icon19 {
              display: none;
            }
            .home-button02 {
              display: none;
            }
            .home-author04 {
              width: 100%;
            }
            .home-icon20 {
              display: none;
            }
            .home-button03 {
              display: none;
            }
            .home-author05 {
              width: 100%;
            }
            .home-icon21 {
              display: none;
            }
            .home-button04 {
              display: none;
            }
            .home-details06 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name06 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point07 {
              width: 100%;
              max-width: 20px;
            }
            .home-button05 {
              display: none;
            }
            .home-author07 {
              width: 100%;
            }
            .home-icon23 {
              display: none;
            }
            .home-button06 {
              display: none;
            }
            .home-details08 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name08 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point09 {
              width: 100%;
              max-width: 20px;
            }
            .home-button07 {
              display: none;
            }
            .home-author09 {
              width: 100%;
            }
            .home-icon25 {
              display: none;
            }
            .home-button08 {
              display: none;
            }
            .home-details10 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name10 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point11 {
              width: 100%;
              max-width: 20px;
            }
            .home-button09 {
              display: none;
            }
            .home-author11 {
              width: 100%;
            }
            .home-icon27 {
              display: none;
            }
            .home-button10 {
              display: none;
            }
            .home-author12 {
              width: 100%;
            }
            .home-icon28 {
              display: none;
            }
            .home-button11 {
              display: none;
            }
            .home-details13 {
              gap: 4px;
              flex-direction: column;
            }
            .home-name13 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-point14 {
              width: 100%;
              max-width: 20px;
            }
            .home-button12 {
              display: none;
            }
            .home-divide1 {
              width: 20px;
            }
            .home-text48 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image06 {
              width: 75%;
            }
            .home-image07 {
              width: 75%;
            }
            .home-image08 {
              width: 75%;
            }
            .home-image09 {
              width: 75%;
            }
            .home-image10 {
              width: 75%;
            }
            .home-image11 {
              width: 75%;
            }
            .home-image12 {
              width: 75%;
            }
            .home-image13 {
              width: 75%;
            }
            .home-divide2 {
              width: 20px;
            }
            .home-text49 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-divide3 {
              width: 20px;
            }
            .home-text50 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-divide4 {
              width: 20px;
            }
            .home-text54 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-divide5 {
              width: 20px;
            }
            .home-title23 {
              font-size: 18px;
            }
            .home-header10 {
              font-size: 16px;
            }
            .home-description03 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header11 {
              font-size: 16px;
            }
            .home-description04 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header12 {
              font-size: 16px;
            }
            .home-description05 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-divide6 {
              width: 20px;
            }
            .home-title24 {
              font-size: 18px;
            }
            .home-header14 {
              font-size: 16px;
            }
            .home-description06 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header15 {
              font-size: 16px;
            }
            .home-description07 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header16 {
              font-size: 16px;
            }
            .home-description08 {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
