export default function AssignmentEditor() {
    return (
    <div id= "wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={41}rows = {8}>
            The assignment is available online Submit a link to the landing page 
            of your Web application running on Netlify. The landing page should include the 
            following: Your full name and section Links to each of the lab assignmtns Links
            to all relevant source code repositories. The kambas application should include
            a link to navigate back to the landing pages.
            </textarea>
            <br /><br />
            
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                         <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="READING">READING</option>
                            <option value="PROJECTS">PROJECTS</option>
                            <option value="EXAMS">EXAMS</option>
                        </select> <br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                         <label htmlFor="wd-points">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-points">
                            <option selected value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                            <option value="Letter Grade">Letter Grade</option>
                            <option value="GPA">GPA</option>
                        </select><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                         <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">Online</option>
                            <option value="No Submission">No Submission</option>
                            <option value="On Paper">On Paper</option>
                            <option value="External Tool">External Tool</option>
                        </select><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                    <label>Online Entry Options</label><br />
                    <input type="checkbox" name="Text Entry" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br />
                    <input type="checkbox" name="Website URL" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label><br />
                    <input type="checkbox" name="Media Recordings" id="wd-media-recordings"/>
                    <label htmlFor="wd-radio-scifi">Media Recordings</label><br />
                    <input type="checkbox" name="Student Annotation" id="wd-student-annotation"/>
                    <label htmlFor="wd-radio-fantasy">Student Annotation</label><br />
                    <input type="checkbox" name="File Uploads" id="wd-file-ipload"/>
                    <label htmlFor="File Uploads">File Uploads</label><br />
                    <br />
                </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                         <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                    Assign to<br />
                    <input id="wd-assign-to" value="Everyone" /><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date"> Due </label>
                    </td>
                    <td>
                        <input type="date" value="2024-05-13" id="wd-due-date"/><br/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-abailable-from"> Available from </label>
                    </td>
                    <td>
                        <input type="date" value="2024-05-06" id="wd-abailable-from"/><br/>
                    </td>
                    <td align="right" valign="top">
                        <label htmlFor="wd-abailable-until"> Until </label>
                    </td>
                    <td>
                        <input type="date" value="2024-05-30" id="wd-abailable-until"/><br/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={4}><hr />
                    </td>
                </tr>
                <tr>
                <td colSpan={4} align="right">
                    <button id="wd-cancel-btn">Cancel</button>
                    <button id="wd-save-btn">Save</button>
                </td>
            </tr>
            </table>
    </div>
);}