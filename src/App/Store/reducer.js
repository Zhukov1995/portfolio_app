const initialState = {
    targetProject: {
        "title": "Интернет магазин",
        "shortDescription": "Интернет магазин техники Apple",
        "stack": ["typescript", "react", "sass", "react-router", "redux"],
        "description": "Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.",
        "features": "Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app.",
        "images": [
            "https://lh3.googleusercontent.com/pw/AMWts8B-e9DMj8Lu8U2oCts2saAIX6EKDBI8X1D_gLtNc8KzyHlz1QJRi6zVcc_q2IT9_m_gKWUWk4Z1T7uZzd4P5KPNo3Ilb0SmFZLdoKSWQVpPnjFgAj0AAzscxqWwdtmhiNO8FUiOJtKGFJ5E1Nz5R_c=w1863-h933-s-no?authuser=0",
            "https://lh3.googleusercontent.com/pw/AMWts8B72Z1g5Z5hzILOA40eVLgNqj40mJNqGhUHUv2WIG32u6mLJpfqzaLGTm4KvxC_s5VnnnsmwFWhb492QXN_LcMDr-ZZZJ1GEmRmjj9u4o-1dF9dgk35t6423Qb_9o5kNX4Lm8oFTQd0H8j3Rn_R1hY=w1855-h933-s-no?authuser=0",
            "https://lh3.googleusercontent.com/pw/AMWts8CR1BOdDxAbNT905xYrDZMuhjmCzBJSRyHUGUY6M0PYAPnh3PxBkSbu1_NyiId83shKyYsCQx1-UP_XL5pLXrVEgq-ggtJp9azao4Px-TvigENZ-NIaUKtr_gDDIL5jiwpMFcceY7cEcfd3WA-yC1I=w1860-h933-s-no?authuser=0",
            "https://lh3.googleusercontent.com/pw/AMWts8CQofjNBlFMpAHS5odtwHc6CldZA4xSU8iEqnhjZbro8ElmrGWuSlOK-BwbsBWN4-2MF6qQZvmsMK291HrEr2gNRlyVT6xj6RL5IHuCw_tVlHxZxSceSYMdrbPMeuPqyn7FhC_jgKW_B2rjf0_Za5g=w1858-h933-s-no?authuser=0",
            "https://lh3.googleusercontent.com/pw/AMWts8AsbH1AdYJh8QwjM4F_mOKK0cUfodnHj7hu76cc5grphuQ7cKUI7pgltfOeH-xJW1z49ny-xkV74OGS-KflE0VTDo1jgPRR_ukk_kiD616b7madPCIVfR6hJkLvkguEVC_lFoZAPTvGoWoCyu7dEIs=w1866-h933-s-no?authuser=0",
            "https://lh3.googleusercontent.com/pw/AMWts8DJyYCv3FuMgHnmRh4r3FDLVYdVmMjX7m5gw1v_QUIfMAs-SO9BJxBPUEX4-U1ksS3PSaaSmyUTZjKpUOWrosJVWEMJ7JDJQeq7igs0luKmRNgyjS8Jf65vce0dQEArDoMtjwdbJzkve8faSNdnfLo=w1885-h933-s-no?authuser=0",
            "https://lh3.googleusercontent.com/pw/AMWts8D4pZ9-T9veB76W-ffGKSYMQzCZWb6u4PzG5pQGRIscderjgBBh059OBQtu5Ks6QBBaLP76NiqmMo0xGvZnMxtssV3VOPFxNpTXEm2TkhRnGHSZyXw5soqYSqT5gHeuh08nyUy6Vbzq4IQrIh-awHQ=w1868-h933-s-no?authuser=0"
        ],
        "link": "#",
        "repo": "#"
    },
    flagBtn: false,
    burger: false,
    topPosition: 0,
    offsetPortfolio: 'Больше',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TARGET_PROJECT':
            return {...state, targetProject: action.payload}
        case 'SET_FLAG_BTN':
            return {...state, flagBtn: action.payload}
        case 'TOOGLE_BURGER_MENU':
            return {...state, burger: !state.burger}
        case 'SET_TOP_POSITION':
            return {...state, topPosition: action.payload}
        case 'SET_OFFSET_PORTFOLIO': 
            return {...state, offsetPortfolio: action.payload}
        default: return state;
    }
}

export default reducer;