import React from 'react'
import { contentUrl } from '../../repositories/repository'


export default function PeopleInfo(props) {
    const item = props.personInfo
    let items = item.also_known_as
    // console.log(item);
    // console.log(items);
  return (
    <div className='wiki-person container py-5'>
        {
            <div className='row'>
                <div className="col-md-3">
                    <img className='w-100 rounded-2' src={contentUrl + item.profile_path} alt={item.name} />
                </div>
                <div className="col-md-8">
                    <h2>{item.name}</h2>
                    <p>{item.biography}</p>
                </div>
                <div className="col-3 mt-2">
                    <h3>Personal Info</h3>
                    <ul className='list-unstyled'>
                        <li>
                            <h5>Known For</h5>
                            <p>{item.known_for_department}</p>
                        </li>
                        <li>
                            <h5>Known Credits</h5>
                            <p>132</p>
                        </li>
                        <li>
                            <h5>Gender</h5>
                            {
                                (item.gender == 2) ?
                                    <p>Male</p>
                                :
                                    <p>Female</p>    
                            }
                        </li>
                        <li>
                            <h5>Birthday</h5>
                            <p>{item.birthday}</p>
                        </li>
                        <li>
                            <h5>Place of birth</h5>
                            <p>{item.place_of_birth}</p>
                        </li>
                        <li>
                            <h5>Also Known As</h5>
                            <ul className='list-unstyled'>
                                <li>{items}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        }
    </div>
  )
}
