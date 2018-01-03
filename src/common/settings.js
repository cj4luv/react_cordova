export const HOST = 'http://192.168.0.17:7320';

export const URLS = {
    API: {
        Login: "/db_user/user/auth/login/", //POST
        UserCheck : "/db_user/user/check/",
        SignUp: "/db_user/user/register/", //POST
        SignUpOpt1 : "/db_user/user/register/opt1/",
        SignUpOpt2 :"/db_user/user/register/opt2/",
        SignUpOpt3 : "/db_user/user/register/opt3/",
        SignUpOpt4 : "/db_user/user/register/opt4/",
        GetUserInfo : "/db_user/user/detail/", // 유저 정보 가져오기

        UpdateUserGr : "/db_user/user/update/",//PUT유저아이디

        HasGroup : "/db_gr/gr/phone/",//GET핸드폰번호
        AddGroup : "/db_gr/gr/add/", //POST

        GetGrReqWithPhone : "/db_gr/gr_req/phone/",
        UpdateGroup : "/db_gr/gr/update/",//그룹번호 PUT
        AddGrReq :"/db_gr/gr_req/add/", //POST

        ReviewCtgList : "/db_review/review/ctg/", //GET,
        GetReview : "/db_review/review/", //GET
        CreateReview : "/db_review/review/add/", //POST
        GetComment : "/db_review/review/cmt_total/",
        GetReply : "/db_review/review/reply/",
        AddComment :"/db_review/review/comment/add", //POST,
        AddReply :"/db_review/review/reply/add", //POST
        UpdateReview : "/db_review/review/update/",

        Like : "/db_like/like_log/add/",
        UnLike : "/db_like/like_log/true_delete/",
        GetUserLike :"/db_like/like_log/",
        GetCheckList : "/db_etc_admin/adm_item/",

        PostEvtReq : "/db_evt_req/evt_req/add/",
        RequestEvent : "/db_evt_req/evt_req/add/",

        EventCtgList : "/db_evt/evt/ctg/",
        GetEventDetail : "/db_evt/evt/detail/",

        StoreReview : "/db_store/store_review/add/",
        StoreEstimate : "/db_store/store_estim/add/",
        StoreEvent : "/db_store/store_event/add/",
        StoreCheck : "/db_store/store_check/add",

        DeleteReview : "/db_store/store_review/ture_delete",
        DeleteEstimate : "/db_store/store_estim/ture_delete",
        DeleteEvent : "/db_store/store_event/ture_delete",
        DeleteCheck : "/db_store/store_check/ture_delete",

        GetStoreReview : "/db_store/store_review/my/dt/",
        GetStoreEstimate : "/db_store/store_estim/my/dt/",
        GetStoreEvent : "/db_store/store_event/my/dt/",
        GetStoreCheck : "/db_store/store_check/my/",

        GetBestReview : "/db_best/best_review/front/",
        GetBestEvent : "/db_best/best_event/front/",

        GetComInfo : "/db_com/com/detail/",

        SearchReview : "/db_search/review/",
        SearchEvent : "/db_search/event/",

        GetAlarms : "/db_notice/notice/",

        SelectAll :"/db_common/select/all/",
        TrueDelete : "/db_common/true_delete/id/",
    },
};
