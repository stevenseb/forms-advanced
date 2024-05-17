import assets from '../../_assets/sample.json'
import { useState } from 'react';

function SampleSurvey() {
  // console.log(assets.questions[0].stem)
  const [Q1, setQ1] = useState(0);
  const [Q2, setQ2] = useState(10);
  const [Q3, setQ3] = useState(' ');
  const [Q4, setQ4] = useState(' ');
  const [Q5, setQ5] = useState(' ');
  const [Q6, setQ6] = useState(' ');

  const onSubmit = e => {
    e.preventDefault;

    const answers =
    {
      Q1,
      Q2,
      Q3,
      Q4,
      Q5,
      Q6
    }
    console.log(answers)
    alert('Survey Submitted')
    setQ1(0)
    setQ2(10)
    setQ3('')
    setQ4('')
    setQ5('')
    setQ6('')

  }

  return (
    <>
      <h1>Take The Survey</h1>
      <form onSubmit={onSubmit}>
        <p>
          <label className='bold'>{assets.questions[0].stem}</label><br></br>
          {assets.questions[0].options[0].text} <input type='radio' name='q1' value={assets.questions[0].options[0].value} onChange={(e) => setQ1(e.target.value)} /><br></br>
          {assets.questions[0].options[1].text} <input type='radio' name='q1' value={assets.questions[0].options[1].value} onChange={(e) => setQ1(e.target.value)} /><br></br>
          {assets.questions[0].options[2].text} <input type='radio' name='q1' value={assets.questions[0].options[2].value} onChange={(e) => setQ1(e.target.value)} /><br></br>
          {assets.questions[0].options[3].text} <input type='radio' name='q1' value={assets.questions[0].options[3].value} onChange={(e) => setQ1(e.target.value)} /><br></br>
        </p>
        <p>
          <label className='bold'>{assets.questions[1].stem}</label><br></br>
          {assets.questions[1].options[0].text} <input type='radio' name='q2' value={assets.questions[1].options[0].value} onChange={(e) => setQ2(e.target.value)} />
          {assets.questions[1].options[1].text} <input type='radio' name='q2' value={assets.questions[1].options[1].value} onChange={(e) => setQ2(e.target.value)} />
          {assets.questions[1].options[2].text} <input type='radio' name='q2' value={assets.questions[1].options[2].value} onChange={(e) => setQ2(e.target.value)} />
        </p>
        <p>
          <label className='bold'>{assets.questions[2].stem}</label><br></br>
          <textarea name='q2' rows='3' maxLength='250' required onChange={(e) => setQ3(e.target.value)} />
        </p>
        <p className="bold">Follow Up</p>
        <p>Please let us know how to connect with you.</p>
        <p>
          <label className='bold'>{assets.questions[4].stem}</label><br></br>
          <input type='text' name='q2' rows='1' maxLength='25' onChange={(e) => setQ4(e.target.value)} />

        </p>
        <p>
          <label className='bold'>{assets.questions[5].stem}</label><br></br>
          <input type='text' name='q2' rows='1' maxLength='100' onChange={(e) => setQ5(e.target.value)} />

        </p>
        <p>
          <label className='bold'>{assets.questions[6].stem}</label><br></br>
          <textarea name='q2' rows='15' maxLength='500' onChange={(e) => setQ6(e.target.value)} />
        </p>


        <button>Submit</button>
      </form>
    </>
  )
}

export default SampleSurvey;
