import React from 'react';
import './Skills.css';
import html from '../../../images/Skills/html.png';
import css from '../../../images/Skills/css.png';
import sass from '../../../images/Skills/sass.png';
import js from '../../../images/Skills/js.png';
import java from '../../../images/Skills/java.png';
import python from '../../../images/Skills/python.png';
import jquery from '../../../images/Skills/jquery.png';
import bootstrap from '../../../images/Skills/bootstrap.png';
import foundation from '../../../images/Skills/foundation.png';
// import angular from '../../../images/Skills/angular.png';
import node from '../../../images/Skills/node.png';
import mongodb from '../../../images/Skills/mongodb.png';
// import github from '../../../images/Skills/github.png';
// import photoshop from '../../../images/Skills/photoshop.png';
// import indesign from '../../../images/Skills/indesign.png';
// import jira from '../../../images/Skills/jira.png';
// import linux from '../../../images/Skills/linux.png';
// import tumblr from '../../../images/Skills/tumblr.png';



function Skills() {
  return (
    <div className="col-sm-offset-1 col-xs-12 col-sm-6 col-md-6 skills-section wp3">
      <h3 className='textt'><em><strong>Some Tools i use daily_________</strong></em> </h3>
      <div className="row ffl">
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ html } id="html" alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ css } id="css" alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ sass } id="sass" alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ js }  id="js" alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ java } id="java" alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ python }  id="python" alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ jquery }  id="jquery" alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ bootstrap }  id="bootstrap" alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ foundation }  id="foundation" alt="Problem"/></div>
        {/* <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ angular }  alt="Problem"/></div> */}
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ node }  id="node" alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ mongodb } alt="Problem"/></div>
        {/* <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ github }  alt="Problem"/></div> */}
        {/* <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ photoshop }  alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ indesign }  alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ jira }  alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ linux }  alt="Problem"/></div>
        <div className="col-xs-3 col-sm-2 col-md-2 skill-icon"><img className="img-responsive" src={ tumblr }  alt="Problem"/></div> */}
      </div>
    </div>
    // <div className="imgg">
    //   <img src="data:image/png;base64,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" alt="can't be displayed" width={100} height={200}/>
    // </div>
  );
}

export default Skills;