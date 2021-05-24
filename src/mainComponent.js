
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from './components/shared/NavbarComponent/NavbarComponent'
import FooterComponent from './components/shared/FooterComponent/FooterComponent'

import HomePageComponent from './components/pages/HomePageComponent/HomePageComponent'

import MembersPageComponent from './components/pages/MembersPageComponent/MembersPageComponent'
import PartnersPageComponent from './components/pages/MembersPageComponent/PartnersPageComponent'
import SingleMemberPageComponent from './components/pages/MembersPageComponent/SingleMemberPageComponent/SingleMemberPageComponent'
import BenifitsPageComponent from './components/pages/MembersPageComponent/BenifitsPageComponent/BenifitsPageComponent'
import LevelsPageComponent from './components/pages/MembersPageComponent/LevelsPageComponent/LevelsPageComponent'
import JoinPageComponent from './components/pages/MembersPageComponent/JoinPageComponent/JoinPageComponent'
import MembersOnlyPageComponent from './components/pages/MembersPageComponent/MembersOnlyPageComponent/MembersOnlyPageComponent'

import PastJobPageComponent from './components/pages/MembersPageComponent/MembersOnlyPageComponent/PastJobPageComponent/PastJobPageComponent'


import AboutPageComponent from './components/pages/AboutPageComponent/AboutPageComponent'
import WhatWeDoPageComponent from './components/pages/AboutPageComponent/WhatWeDoPageComponent/WhatWeDoPageComponent'
import FaqPageComponent from './components/pages/AboutPageComponent/FaqPageComponent/FaqPageComponent'
import BoardPageComponent from './components/pages/AboutPageComponent/StaffPagesComponents/BoardPageComponent/BoardPageComponent'
import TeamPageComponent from './components/pages/AboutPageComponent/StaffPagesComponents/TeamPageComponent/TeamPageComponent'

import AdvisoryBoardPageComponent from './components/pages/AboutPageComponent/StaffPagesComponents/AdvisoryBoardPageComponent/AdvisoryBoardPageComponent'
import StaffMemberSingleViewPageComponent from './components/pages/AboutPageComponent/StaffPagesComponents/StaffMemberSingleViewPageComponent/StaffMemberSingleViewPageComponent'





import KnowledgeCenterComponent from "./components/pages/KnowledgeCenterComponent/KnowledgeCenterComponent"
import ProjectsPageComponent from "./components/pages/KnowledgeCenterComponent/ProjectsPageComponent/ProjectsPageComponent"
import SingleProjectPageComponent from "./components/pages/KnowledgeCenterComponent/ProjectsPageComponent/SingleProjectPageComponent/SingleProjectPageComponent"
import ReportsPageComponent from "./components/pages/KnowledgeCenterComponent/ReportsPageComponent/ReportsPageComponent"
import SingleReportPageComponent from "./components/pages/KnowledgeCenterComponent/ReportsPageComponent/SingleReportPageComponent/SingleReportPageComponent"
import CaseStudiesPageComponent from "./components/pages/KnowledgeCenterComponent/CaseStudiesPageComponent/CaseStudiesPageComponent"
import SingleCaseStudyPageComponent from "./components/pages/KnowledgeCenterComponent/CaseStudiesPageComponent/SingleCaseStudyPageComponent/SingleCaseStudyPageComponent"
import PresintationsPageComponent from "./components/pages/KnowledgeCenterComponent/PresintationsPageComponent/PresintationsPageComponent"
import LinksPageComponent from "./components/pages/KnowledgeCenterComponent/LinksPageComponent/LinksPageComponent"
import PodcastsPageComponent from "./components/pages/KnowledgeCenterComponent/PodcastsPageComponent/PodcastsPageComponent"
import SinglePodcastsPageComponent from "./components/pages/KnowledgeCenterComponent/PodcastsPageComponent/SinglePodcastsPageComponent/SinglePodcastsPageComponent"
import WebinarsPageComponent from "./components/pages/KnowledgeCenterComponent/WebinarsPageComponent/WebinarsPageComponent"
import SingleWebinarPageComponent from "./components/pages/KnowledgeCenterComponent/WebinarsPageComponent/SingleWebinarPageComponent/SingleWebinarPageComponent"
import BlogsPageComponent from "./components/pages/KnowledgeCenterComponent/BlogsPageComponent/BlogsPageComponent"
import SingleBlogPageComponent from "./components/pages/KnowledgeCenterComponent/BlogsPageComponent/SingleBlogPageComponent/SingleBlogPageComponent"
import PapersPageComponent from "./components/pages/KnowledgeCenterComponent/PapersPageComponent/PapersPageComponent"
import SinglePaperPageComponent from "./components/pages/KnowledgeCenterComponent/PapersPageComponent/SinglePaperPageComponent/SinglePaperPageComponent"



import EventNewsPageComponent from './components/pages/EventNewsPageComponent/EventNewsPageComponent'
import NewsEventSubPagesComponent from './components/pages/EventNewsPageComponent/NewsEventSubPagesComponent/NewsEventSubPagesComponent'
import EventViewPageComponent from './components/pages/EventNewsPageComponent/NewsEventSubPagesComponent/EventViewPageComponent/EventViewPageComponent'
import NewsViewPageComponent from './components/pages/EventNewsPageComponent/NewsEventSubPagesComponent/NewsViewPageComponent/NewsViewPageComponent'
import MediaPageComponent from './components/pages/EventNewsPageComponent/MediaPageComponent/MediaPageComponent'
import JobPageCompoenent from './components/pages/EventNewsPageComponent/JobPageCompoenent/JobPageCompoenent'


import WorkingGroupsPageComponent from './components/pages/WorkingGroupsPageComponent/WorkingGroupsPageComponent'
import SingleWorkingGroupPageComponent from './components/pages/WorkingGroupsPageComponent/SingleWorkingGroupPageComponent/SingleWorkingGroupPageComponent'



import AcademyPageComponent from './components/pages/AcademyPageComponent/AcademyPageComponent'
import ConsultancyPageComponent from './components/pages/ConsultancyPageComponent/ConsultancyPageComponent'

import CoursePageComponent from './components/pages/AcademyPageComponent/CoursePageComponent/CoursePageComponent'




import ScrollToTopComponent from "./ScrollToTopComponent"

// import { useHttpClient } from "./hooks/http-hook"
import useInitLoadedData from "./hooks/LoadInitData"
import { useEffect, useContext } from 'react';


import SignUpModalComponenet from "./components/shared/SignUpModalComponenet/SignUpModalComponenet"
import SignInModalComponenet from "./components/shared/SignInModalComponenet/SignInModalComponenet"

import { LoginContext } from "./contexts/LoginContext"


import StickersComponent from './components/shared/StickersComponent/StickersComponent'


import NewsLettersPageComponent from './components/pages/KnowledgeCenterComponent/NewsLettersPageComponent/NewsLettersPageComponent'
import SingleNewsLetterPageComponent from './components/pages/KnowledgeCenterComponent/NewsLettersPageComponent/SingleNewsLetterPageComponent/SingleNewsLetterPageComponent'


import ActivitiesPageComponent from './components/pages/ActivitiesPageComponent/ActivitiesPageComponent'


export default function MainComponent() {


    const { LoadedEntity_s, LoadedPapers, LoadedLinks, LoadedBlogs, LoadedWebinars, LoadedPodcasts, LoadedCase_studies, LoadedNews, LoadedProjects, LoadedProgrammes, LoadedReports, LoadedStaff_members, LoadedJobs, LoadedCourses, LoadedEvents, LoadedNewsletters, } = useInitLoadedData();


    const { login, IsLoggedIn, Token, ToggleLoginModal, IsLogInModalShown, IsSignUpModalShown, ToggleSignUpModal } = useContext(LoginContext);
    const check_if_logged_in = () => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData && storedData.token) {
            login(storedData.token, storedData.user);
            // console.log(`storedData.user`, storedData.user)
        }

    }



    useEffect(() => {

        check_if_logged_in();

    }, []);





    return (
        <div id="main_component" style={{ backgroundColor: "white", overflow: "" }}>
            <div id="content_wrap">
                <SignUpModalComponenet />
                <SignInModalComponenet />
                <StickersComponent />
                <Router >
                    <ScrollToTopComponent />
                    <NavbarComponent /> {/* the navbar has to be inside the router since it uses LINK component which runs only inside router component */}
                    <Switch id="react_router_switch">
                        <Route exact path="/">
                            <HomePageComponent className="home"
                                programmes_state={{ LoadedProgrammes }}
                                members={LoadedEntity_s}
                                latest_news={LoadedNews}
                                LoadedPodcasts={LoadedPodcasts}
                                latest_events={LoadedEvents}
                            />
                        </Route>




                        <Route exact path="/CONSULTANCY">
                            <ConsultancyPageComponent className="academyPage" />
                        </Route>

                        <Route path="/ABOUTUS/JOBS">
                            {(props) => <JobPageCompoenent {...props} jobs={LoadedJobs} />}
                        </Route>







                        <Route path="/ABOUTUS/working_groups/:group_id"
                            component={(props) => <SingleWorkingGroupPageComponent {...props} programmes_state={{ LoadedProgrammes }} />
                            }
                        />

                        <Route exact path="/ABOUTUS/working_groups">
                            <WorkingGroupsPageComponent type="working_group" programmes_state={{ LoadedProgrammes }} />
                        </Route>



                        <Route exact path="/ABOUTUS/programms">
                            <WorkingGroupsPageComponent type="programm" programmes_state={{ LoadedProgrammes }} />
                        </Route>



                        <Route exact path="/ABOUTUS/WHATWEDO">
                            <WhatWeDoPageComponent programmes_state={{ LoadedProgrammes }} />
                        </Route>

                        <Route exact path="/ABOUTUS/STAFF">
                            <BoardPageComponent staff={LoadedStaff_members} />
                        </Route>

                        <Route exact path="/ABOUTUS/STAFF/Board">
                            <BoardPageComponent staff={LoadedStaff_members} />
                        </Route>

                        <Route exact path="/ABOUTUS/STAFF/ADVISORY">
                            <AdvisoryBoardPageComponent staff={LoadedStaff_members} />
                        </Route>

                        <Route exact path="/ABOUTUS/STAFF/TEAM">
                            <TeamPageComponent staff={LoadedStaff_members} />
                        </Route>

                        <Route exact path="/ABOUTUS/FAQ">
                            <FaqPageComponent />
                        </Route>

                        <Route exact path="/ABOUTUS/STAFF/:member_id"
                            component={(props) => <   StaffMemberSingleViewPageComponent {...props} staff={LoadedStaff_members} />}
                        />

                        <Route exact path="/ABOUTUS">
                            <AboutPageComponent />
                        </Route>














                        <Route exact path="/ACTIVITIES/CONSULTANCY">
                            <ConsultancyPageComponent className="academyPage" />
                        </Route>



                        <Route exact path="/ACTIVITIES/ACADEMY/:course_id"
                            component={(props) => <   CoursePageComponent {...props} courses={LoadedCourses} />}
                        />

                        <Route exact path="/ACTIVITIES/ACADEMY">
                            <AcademyPageComponent className="academyPage" courses={LoadedCourses} />
                        </Route>






                        <Route path="/ACTIVITIES/EVENTS/:sub_parameter/:Event_id"
                            component={(props) =>
                                <   EventViewPageComponent {...props} />
                            }
                        />



                        <Route path="/ACTIVITIES/News/:News_id"
                            component={(props) =>
                                <   NewsViewPageComponent {...props} />
                            }
                        />

                        <Route path="/ACTIVITIES/EVENTS/:sub_parameter">
                            {(props) =>
                                <   NewsEventSubPagesComponent {...props} />
                            }
                        </Route>





                        <Route exact path="/ACTIVITIES/PODCASTS/:podcast_id"
                            component={(props) => <   SinglePodcastsPageComponent {...props} podcasts={LoadedPodcasts} />}
                        />


                        <Route exact path="/ACTIVITIES/PODCASTS">
                            <PodcastsPageComponent podcasts={LoadedPodcasts} />
                        </Route>


                        <Route exact path="/ACTIVITIES">
                            <ActivitiesPageComponent />
                        </Route>














                        <Route exact path="/KNOWLEDGECENTER/PROJECTS/:project_id"
                            component={(props) => <   SingleProjectPageComponent {...props} projects={LoadedProjects} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/PROJECTS">
                            <ProjectsPageComponent projects={LoadedProjects} />
                        </Route>


                        <Route exact path="/KNOWLEDGECENTER/REPORTS/:report_id"
                            component={(props) => <   SingleReportPageComponent {...props} reports={LoadedReports} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/REPORTS">
                            <ReportsPageComponent reports={LoadedReports} />
                        </Route>



                        <Route exact path="/KNOWLEDGECENTER/CASE_STUDIES/:case_study_id"
                            component={(props) => <   SingleCaseStudyPageComponent {...props} case_studies={LoadedCase_studies} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/CASE_STUDIES">
                            <CaseStudiesPageComponent case_studies={LoadedCase_studies} />
                        </Route>



                        <Route exact path="/KNOWLEDGECENTER/PAPERS/:paper_id"
                            component={(props) => <   SinglePaperPageComponent {...props} papers={LoadedPapers} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/PAPERS">
                            <PapersPageComponent papers={LoadedPapers} />
                        </Route>




                        <Route exact path="/KNOWLEDGECENTER/PODCASTS/:podcast_id"
                            component={(props) => <   SinglePodcastsPageComponent {...props} podcasts={LoadedPodcasts} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/PODCASTS">
                            <PodcastsPageComponent podcasts={LoadedPodcasts} />
                        </Route>



                        <Route exact path="/KNOWLEDGECENTER/WEBINARS/:webinar_id"
                            component={(props) => <   SingleWebinarPageComponent {...props} webinars={LoadedWebinars} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/WEBINARS">
                            <WebinarsPageComponent webinars={LoadedWebinars} />
                        </Route>




                        <Route exact path="/KNOWLEDGECENTER/BLOGS/:blog_id"
                            component={(props) => <   SingleBlogPageComponent {...props} blogs={LoadedBlogs} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/BLOGS">
                            <BlogsPageComponent blogs={LoadedBlogs} />
                        </Route>


                        <Route exact path="/KNOWLEDGECENTER/LINKS">
                            <LinksPageComponent links={LoadedLinks} />
                        </Route>


                        <Route exact path="/KNOWLEDGECENTER/PRESENTATIONS">
                            <PresintationsPageComponent />
                        </Route>


                        <Route exact path="/KNOWLEDGECENTER/PRESENTATIONS">
                            <PresintationsPageComponent />
                        </Route>

                        <Route exact path="/KNOWLEDGECENTER/NEWSLETTER">
                            <NewsLettersPageComponent NewsLetters={LoadedNewsletters} />
                        </Route>


                        <Route exact path="/KNOWLEDGECENTER/NEWSLETTER/:NewsLetter_id"
                            component={(props) => <SingleNewsLetterPageComponent {...props} NewsLetters={LoadedNewsletters} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER">
                            <KnowledgeCenterComponent />
                        </Route>














                        <Route path="/MEMBERSHIP/MEMBERS/:member_id"
                            component={
                                (props) => <   SingleMemberPageComponent {...props} members={LoadedEntity_s} />
                            }
                        />


                        <Route path="/MEMBERSHIP/MEMBERSONLY/POSTJOB"
                            component={
                                (props) => <   PastJobPageComponent {...props} />
                            }
                        />


                        <Route path="/MEMBERSHIP/MEMBERSONLY"
                            component={
                                (props) => <   MembersOnlyPageComponent {...props} latest_news={LoadedNews} />
                            }
                        />





                        <Route exact path="/MEMBERSHIP/BENIFITS">
                            <BenifitsPageComponent />
                        </Route>
                        <Route exact path="/MEMBERSHIP/LEVELS">
                            <LevelsPageComponent />
                        </Route>
                        <Route exact path="/MEMBERSHIP/JOIN">
                            <JoinPageComponent />
                        </Route>


                        <Route exact path="/MEMBERSHIP/MEMBERS">
                            <MembersPageComponent members={LoadedEntity_s} />
                        </Route>

                        <Route exact path="/MEMBERSHIP/PARTNERS">
                            <PartnersPageComponent members={LoadedEntity_s} />
                        </Route>
                        <Route exact path="/MEMBERSHIP">
                            <MembersPageComponent members={LoadedEntity_s} />
                        </Route>






                        <Route path="/EVENTS_NEWS/MEDIA"
                            component={(props) =>
                                <   MediaPageComponent {...props} />
                            }
                        />




                        <Route path="/EVENTS_NEWS/News/:News_id"
                            component={(props) =>
                                <   NewsViewPageComponent {...props} />
                            }
                        />


                        <Route path="/EVENTS_NEWS/:sub_parameter/:Event_id"
                            component={(props) =>
                                <   EventViewPageComponent {...props} />
                            }
                        />
                        <Route path="/EVENTS_NEWS/:sub_parameter">
                            {(props) =>
                                <   NewsEventSubPagesComponent {...props} />
                            }
                        </Route>




                        <Route path="/EVENTS_NEWS">
                            {(props) => <EventNewsPageComponent {...props} />}
                        </Route>




                    </Switch>
                </Router>
            </div>
            <FooterComponent />

        </div >

    )
}

