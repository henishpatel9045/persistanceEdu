import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import SectionHeading from '../SectionHeading'
import "../components.scss"

function Journey() {
  const [show, setShow] = useState(false);

  return (
    <Row className='d-flex align-items-center justify-content-center p-3'>
        <Col xs={12}>
            <SectionHeading title={"Journey of Persistence"} />
        </Col>
        <Col xs={11} xxl={10} className="journey">
            <h4><b>Meet Ashish</b></h4>
            <p>Before he was the super tutor students look up to today, Ashish was a hard-working student intently focused on his goals. His expansive educational experience at IIT Bombay, with a BTech in Metallurgy and an MTech in Material Science, speaks to those qualities.</p>
            <p>After that, Ashish was offered the opportunity to take up a high-profile, cushy job in the Netherlands for a reputed firm.</p>
            <p>But at that point, he did something that most people wouldn’t. He counted his privileges and decided that it was time to give back to society. And so, he turned down that offer, counted his privileges and decided to use them to benefit those who didn’t have much themselves.</p>
            <br />
            <h4><b>Passion and Persistence</b></h4>
            <p>Ashish founded the organisation Persistence Education in 2008 in Ranchi with a goal to identify students from economically less privileged sections of society and help them with opportunities not only to study beyond their means but to aspire for even higher goals.</p>
            <p>And yes, that meant IIT and NEET level goals.</p>
            <p>Charging a fee as low as Rs. 3000 per year, his organisation provides these students with a comprehensive educational experience with lectures, engaging conversations, giving students room to self-study and sometimes, even lightening up the mood with jokes, just to keep them alert. {!show && <button onClick={() => setShow(true)}>Read More...</button>}</p>
            
            {show && <><p>This unique approach to education seems to have worked wonders. Nitin Kumar, one of Ashish’s students, had previously spent 2 years in Kota but had fallen short of his JEE Advanced goals. This year, after an entire year’s efforts at Persistence, Nitin was a 99.9 percentiler in JEE Main, qualified for JEE Advanced with a rank of 650 and is set to start his BTech at IIT Kanpur.</p>
            <p>Nitin’s experience with both of his attempts at the JEE Advanced paper couldn’t be further apart. He says that this is because the second time, Ashish had helped him figure out the underlying philosophies behind the paper.</p>
            <p>“Sir always focuses on stripping the whole material down to the essentials. We revise those core concepts so well that we can identify the solutions as soon as we read the question because we identify the concept behind it”, he says.</p>
            <p><i>“He tells us to expect seemingly impossible questions in every paper and not let them intimidate and paralyse you. Just acknowledge their difficulty and move on to the questions you feel good about.”</i></p>
            <p>Nitin and many of the other hard-working students at Persistence, along with their tireless teachers, spend their entire days, often spanning from 9 am to 9 pm, in the classroom.</p>
            <p>The results speak for themselves. This year, out of Ashish’s classroom of 50 students who all appeared for JEE Main, 41 made it through. 3 out of 7 of his students qualified for AIIMS. If you think that’s impressive, the success rate for the 11 students who appeared for NEET is 100%.</p>
            <p>If you’re wondering why you haven’t heard of these figures before, it is because Persistence Education keeps a low profile. They don’t have billboards plastered across the city and the entire institute is situated inside a humble, nondescript building. And that’s because, for Ashish, priorities for Persistence Education aren’t earning fees or growing a business.</p>
            <p>As Ashish puts it,</p>
            <p><i>“It is the satisfaction of knowing that these kids have the potential of making the impossible possible. Given their circumstances, the cards are often stacked firmly against them, but they are so relentless. We just believe in giving them the right opportunity.”</i></p>
            <p>But often, these opportunities even extend beyond the classroom. When challenging circumstances at some of the students’ households have threatened to keep those students from focusing on their study goals, Ashish hasn’t hesitated to step up, resolve issues and provide monetary support to the students’ families.</p>
            <p>“I always felt cared for”, says Pragati Anand, a former student from Persistence who also cracked her JEE Advanced and was accepted at IIT, Bombay. “I had enrolled in other such institutes before where it was the same routine — come to class, listen to lectures, leave and that’s the end of the transaction. But here, Ashish sir is more of a friend than a ‘sir’.</p>
            <p><i>“From things as small as making sure everyone has reached home safely to organising coding classes so that we would be at the required skill levels for our IIT journeys, he is always looking out for us.”</i></p></>}
        </Col>
    </Row>
  )
}

export default Journey