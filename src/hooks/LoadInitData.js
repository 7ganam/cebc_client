
import { useState, useEffect, useCallback } from 'react';
import { useHttpClient } from "./http-hook"
import moment from 'moment';


function useInitLoadedData() {


    const { isLoading: ProgrammesIsLoading, error: ProgrammesError, sendRequest: sendProgrammesRequest, clearError } = useHttpClient();
    const [LoadedProgrammes, setLoadedProgrammes] = useState([]);
    const fetch_Programmes = useCallback(
        async () => {
            try {

                const responseData = await sendProgrammesRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/programmes-and-groups?_sort=updated_at`
                );

                setLoadedProgrammes(responseData);
                console.log('loaded programs-groups', responseData)
            } catch (err) {
                console.log({ err })
            }


        },
        [sendProgrammesRequest],
    );


    const { isLoading: ProjectsIsLoading, error: ProjectsError, sendRequest: sendProjectsRequest, clearError: clearProjectsError } = useHttpClient();
    const [LoadedProjects, setLoadedProjects] = useState([]);
    const fetch_Projects = useCallback(
        async () => {
            try {
                const responseData = await sendProjectsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/projects`
                );
                setLoadedProjects(responseData);
                // console.log('projects ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendProjectsRequest],
    );


    const { isLoading: NewsIsLoading, error: NewsError, sendRequest: sendNewsRequest, clearError: clearNewsError } = useHttpClient();
    const [LoadedNews, setLoadedNews] = useState([]);
    const [LoadedNewsCount, setLoadedNewsCount] = useState([]);
    const fetch_News = useCallback(
        async () => {
            try {


                const responseData = await sendNewsRequest(`${process.env.REACT_APP_BACKEND_URL}/news?_limit=4&_sort=date:DESC`);
                setLoadedNews(responseData);
                // console.log({ responseData })
            } catch (err) {
                console.log({ err })
            }
        },
        [sendNewsRequest],
    );

    const { isLoading: EventsIsLoading, error: EventsError, sendRequest: sendEventsRequest, clearError: clearEventsError } = useHttpClient();
    const [LoadedEvents, setLoadedEvents] = useState([]);
    const fetch_Events = useCallback(
        async () => {
            try {
                const responseData = await sendEventsRequest(`${process.env.REACT_APP_BACKEND_URL}/events?_limit=4&_sort=Event_date:DESC`);
                setLoadedEvents(responseData);
                // console.log('LoadedEvents', { responseData })
            } catch (err) {
                console.log({ err })
            }
        },
        [sendEventsRequest],
    );



    const { isLoading: ReportsIsLoading, error: ReportsError, sendRequest: sendReportsRequest, clearError: clearReportsError } = useHttpClient();
    const [LoadedReports, setLoadedReports] = useState([]);
    const fetch_Reports = useCallback(
        async () => {
            try {
                const responseData = await sendReportsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/reports-publications`
                );
                setLoadedReports(responseData);
                // console.log('Reports', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendReportsRequest],
    );



    const { isLoading: Case_studiesIsLoading, error: Case_studiesError, sendRequest: sendCase_studiesRequest, clearError: clearCase_studiesError } = useHttpClient();
    const [LoadedCase_studies, setLoadedCase_studies] = useState([]);
    const fetch_Case_studies = useCallback(
        async () => {
            try {
                const responseData = await sendCase_studiesRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/case-studies`
                );
                setLoadedCase_studies(responseData);
                // console.log('Case_studies', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendCase_studiesRequest],
    );



    const { isLoading: PodcastsIsLoading, error: PodcastsError, sendRequest: sendPodcastsRequest, clearError: clearPodcastsError } = useHttpClient();
    const [LoadedPodcasts, setLoadedPodcasts] = useState([]);
    const fetch_Podcasts = useCallback(
        async () => {
            try {
                const responseData = await sendPodcastsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/podcasts?_sort=created_at:DESC`
                );
                setLoadedPodcasts(responseData);
                // console.log('Podcasts', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendPodcastsRequest],
    );



    const { isLoading: WebinarsIsLoading, error: WebinarsError, sendRequest: sendWebinarsRequest, clearError: clearWebinarsError } = useHttpClient();
    const [LoadedWebinars, setLoadedWebinars] = useState([]);
    const fetch_Webinars = useCallback(
        async () => {
            try {
                const responseData = await sendWebinarsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/webinars`
                );
                setLoadedWebinars(responseData);
                // console.log('Webinars ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendWebinarsRequest],
    );



    const { isLoading: BlogsIsLoading, error: BlogsError, sendRequest: sendBlogsRequest, clearError: clearBlogsError } = useHttpClient();
    const [LoadedBlogs, setLoadedBlogs] = useState([]);
    const fetch_Blogs = useCallback(
        async () => {
            try {
                const responseData = await sendBlogsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/blogs`
                );
                setLoadedBlogs(responseData);
                // console.log('Blogs ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendBlogsRequest],
    );



    const { isLoading: LinksIsLoading, error: LinksError, sendRequest: sendLinksRequest, clearError: clearLinksError } = useHttpClient();
    const [LoadedLinks, setLoadedLinks] = useState([]);
    const fetch_Links = useCallback(
        async () => {
            try {
                const responseData = await sendLinksRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/useful-links`
                );
                setLoadedLinks(responseData);
                // console.log('Links ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendLinksRequest],
    );




    const { isLoading: PapersIsLoading, error: PapersError, sendRequest: sendPapersRequest, clearError: clearPapersError } = useHttpClient();
    const [LoadedPapers, setLoadedPapers] = useState([]);
    const fetch_Papers = useCallback(
        async () => {
            try {
                const responseData = await sendPapersRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/white-papers`
                );
                setLoadedPapers(responseData);
                // console.log('Papers ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendPapersRequest],
    );


    const { isLoading: Entity_sIsLoading, error: Entity_sError, sendRequest: sendEntity_sRequest, clearError: clearEntity_sError } = useHttpClient();
    const [LoadedEntity_s, setLoadedEntity_s] = useState([]);
    const fetch_Entity_s = useCallback(
        async () => {
            try {
                const responseData = await sendEntity_sRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/entities`
                );
                setLoadedEntity_s(responseData);
                // console.log('fetched_Entity_s ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendEntity_sRequest],
    );

    const { isLoading: Staff_membersIsLoading, error: Staff_membersError, sendRequest: sendStaff_membersRequest, clearError: clearStaff_membersError } = useHttpClient();
    const [LoadedStaff_members, setLoadedStaff_members] = useState([]);
    const fetch_Staff_members = useCallback(
        async () => {
            try {
                const responseData = await sendStaff_membersRequest(
                    // `${process.env.REACT_APP_BACKEND_URL}/staff-members`
                    `${process.env.REACT_APP_BACKEND_URL}/users`

                );
                setLoadedStaff_members(responseData);
                // console.log('fetched_Staff_members ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendStaff_membersRequest],
    );


    const { isLoading: JobsIsLoading, error: JobsError, sendRequest: sendJobsRequest, clearError: clearJobsError } = useHttpClient();
    const [LoadedJobs, setLoadedJobs] = useState([]);
    const fetch_Jobs = useCallback(
        async () => {
            try {
                const responseData = await sendJobsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/jobs`
                );
                setLoadedJobs(responseData);
                // console.log('fetched_Jobs ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendJobsRequest],
    );


    const { isLoading: CoursesIsLoading, error: CoursesError, sendRequest: sendCoursesRequest, clearError: clearCoursesError } = useHttpClient();
    const [LoadedCourses, setLoadedCourses] = useState([]);
    const fetch_Courses = useCallback(
        async () => {
            try {
                const responseData = await sendCoursesRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/courses`
                );
                setLoadedCourses(responseData);
                // console.log('fetched_Courses ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendCoursesRequest],
    );

    const { isLoading: NewslettersIsLoading, error: NewslettersError, sendRequest: sendNewslettersRequest, clearError: clearNewslettersError } = useHttpClient();
    const [LoadedNewsletters, setLoadedNewsletters] = useState([]);
    const fetch_Newsletters = useCallback(
        async () => {
            try {
                const responseData = await sendNewslettersRequest(`${process.env.REACT_APP_BACKEND_URL}/newsletters`);
                setLoadedNewsletters(responseData);
                // console.log('fetched_Newsletters ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendNewslettersRequest],
    );




    useEffect(() => {
        fetch_Events();
        fetch_News();
        fetch_Podcasts();
        fetch_Programmes();
        fetch_Entity_s();
        fetch_Projects();
        fetch_Reports();
        fetch_Case_studies();
        fetch_Webinars();
        fetch_Blogs();
        fetch_Links();
        fetch_Papers();
        fetch_Staff_members();
        fetch_Jobs();
        fetch_Courses();
        fetch_Newsletters();
        // fetch_upcomming_Events();

    }, []);




    return { LoadedEntity_s, LoadedPapers, LoadedLinks, LoadedBlogs, LoadedWebinars, LoadedPodcasts, LoadedCase_studies, LoadedNewsCount, LoadedNews, LoadedProjects, LoadedProgrammes, LoadedReports, LoadedStaff_members, LoadedJobs, LoadedCourses, LoadedEvents, LoadedNewsletters, };
}

export default useInitLoadedData

