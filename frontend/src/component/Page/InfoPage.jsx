import React from 'react';
import {Box} from "@mui/material";
import NavbarUI from "../UI/navbarUI/NavbarUI";
import VerticalNavbarUI from "../UI/navbarUI/VerticalNavbarUI";

function InfoPage() {
    return (
        <Box>
            <VerticalNavbarUI/>
            <Box sx={{height : '100vh',paddingRight:'1rem'}} >
                <NavbarUI/>
                <Box sx={{marginLeft: {sm:'17.25rem',xs:'0'},p:'1rem'}}>
                <h2>活動依據</h2>
                <p>108年6月4日107學年度第2學期6月份臨時館務會議通過。</p>

                <h2>活動辦法</h2>
                    <ol>
                        <li>
                            <p>本校圖書館（以下簡稱本館）為鼓勵本校教職員工生，在閒暇之餘，利用零星時間，至本館前棟三樓「暢銷書/經典書區」閱覽精選圖書，進而培養「終身閱讀」習慣，茲訂定「星夜享讀計畫」實施要點（以下簡稱本要點）。</p>
                        </li>
                        <li>
                            <p>本計畫參加對象限本校在校之教職員工生，在校期間每人每月得提出多次申請案。</p>
                        </li>
                        <li>
                            <h3>活動方式：</h3>
                            <ol type="a">
                                <li>
                                    <p>申請人須填妥「我的星夜享讀計畫」申請表，填選擬計畫閱讀的書籍、閱讀進度規劃、預計到館閱讀的日期時間，親筆簽名後送交本館一樓借還書櫃臺。審核通過後（以電子郵件通知），申請人取得計畫案號，即可至本館一樓借還書櫃臺領取「我的星夜享讀計畫到館閱讀紀錄卡」。</p>
                                </li>
                                <li>
                                    <p>擬閱讀書籍可由本館每月第一天（如遇假日則順延）所公布之當月份「暢銷書」、「推薦經典書(限於館內閱覽者)」書單中挑選。</p>
                                </li>
                                <li>
                                    <p>申請人應自行安排時間（夜間、白天均可）至本館前棟三樓「暢銷書/經典書區」閱讀，建議每次閱讀時間至少為30分鐘，並自行於「到館閱讀紀錄卡」上蓋印戳記。戳記為本館提供，置於該書區。當月份計畫閱讀之書籍應於當月份閱讀完畢。</p>
                                </li>
                                <li>
                                    <p>閱讀完畢須依本館提供之格式撰寫心得報告，每冊圖書之心得字數應逾五百字，且於次月第五日前（如遇假日則順延）以電子郵件繳交至libcir3F@mail.ntust.edu.tw信箱。心得報告之撰寫須遵照著作權法之規定。</p>
                                </li>
                                <li>
                                    <p>心得報告經審核通過後，須填寫「閱讀心得授權書」，親筆簽名送交本館，即為結案。</p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h3>獎勵方式：</h3>
                        </li>
                        <li>
                            <p>本要點經本館館務會議通過後實施，修正時亦同。</p>
                        </li>
                        <li>
                            <h3>獎勵方式：</h3>
                        </li>
                        <li>
                            <p>本要點經本館館務會議通過後實施，修正時亦同。</p>
                        </li>
                        <li>
                            <h3>獎勵方式：</h3>
                        </li>
                        <li>
                            <p>本要點經本館館務會議通過後實施，修正時亦同。</p>
                        </li>
                        <li>
                            <h3>獎勵方式：</h3>
                        </li>
                        <li>
                            <p>本要點經本館館務會議通過後實施，修正時亦同。</p>
                        </li>
                    </ol>
                </Box>
            </Box>
        </Box>

    );
}

export default InfoPage;