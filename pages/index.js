import { Component } from "react";
import { ThemeProvider } from 'styled-components';

import theme from '../components/styles/theme';
import Template from '../components/Template';
import Meta from '../components/Meta';
import HomeContainer from '../components/styles/home';

const BlogImage = '../static/blog-grace.svg';
export default class Index extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Template>
                    <Meta
                        title={`Peter Riley Osborne - Musician, Developer, Speaker | Eugene, Oregon`}
                        description={`Peter Riley Osborne is a musician, developer, and speaker from Eugene, Oregon.  He is curreently employed by CBT Nuggets as a development manager, and is also a member of Peter Riley Osborne and the Truckstop Handshakes, You, Me, & Pete, as well as lead guitarist for Gretchen Owens and the Jake Brakes.  Peter has also spoken at local tech events and informally will tell stories of enhanced mundane life experiences for free.`}
                        />
                    <HomeContainer>
                        <h2>This is the personal website of musician, developer, and speaker Peter Riley Osborne. Who is me, and I am speaking in the third person for effect.</h2>

                        <section className="schedule">
                            <header>
                                <h3>Upcoming Events</h3>
                            </header>
                            <div>
                                <p>
                                    <strong>Lori LeMaster</strong><br />
                                    Oakway Center<br />
                                    5:30pm, August 7, 2019
                                </p>
                                <p>
                                    <strong>You, Me, &amp; Pete</strong><br />
                                    Kendal Auto Private Event<br />
                                    Noon, August 17, 2019
                                </p>
                                <p>
                                    <strong>Lori LeMaster</strong><br />
                                    Sarver Winery<br />
                                    7pm, August 24, 2019
                                </p>
                            </div>
                        </section>

                        <section className="latest-blog">
                            <header>
                                <h3>Recent Blog Post</h3>
                            </header>
                            <article>
                                <header>
                                    <h4>Grace, more than just Will's friend.</h4>
                                    <div className="byline">
                                        <address className="author">By <a rel="author" href="/about/">Peter Riley Osborne</a></address>
                                        on <time datetsTime="2019-07-30" title="July 30th, 2019">7/30/19</time>
                                    </div>
                                    <figure>
                                            { BlogImage }
                                        <figcaption>"You know what symbolizes empathy perfectly?  Leaves."</figcaption>
                                    </figure>
                                </header>
                                <p><em>So what does Grace mean to me? And why is it capitalized?</em> These are the questions that zero people are asking me becuase, well, why would they?  yet Grace is the single greatest panacea for what we are experiencing in our homes, work, and country.</p>

                                <p>To many, the term Grace is limited to its use to describe agility and a certain comfort, ease, and beauty in motion.  Grace is also a powerful word to many religions, encapsulating our ability to give people a loving benefit of the doubt, even if they probably don't deserve it.  Because, quite frankly, very few do. In those cases it is not called grace, but rather 'not being a jerk'. </p>

                                <p>So what does Webster say about grace?</p>

                                <blockquote>"a musical trill, turn, or appoggiatura"</blockquote>

                                <p>Of course, for the purposes of this blog and in honor of limiting context to make my point feel more valid, I will actually use this version of Mirriam-Webster's linguistic tyranny:</p>

                                <blockquote>"unmerited divine assistance given to humans for their regeneration or sanctification"</blockquote>

                                <p>While I understand that some will immediately dismiss this after reading the word "divine" (and if not, then they will most definitely abandon post when we get to the words 'regeneration' or 'sanctification').  the reality is that the most important part of this definition is the word "unmerited"</p>
                            </article>
                        </section>
                    </HomeContainer>
                </Template>
            </ThemeProvider>
        );
    }
}
