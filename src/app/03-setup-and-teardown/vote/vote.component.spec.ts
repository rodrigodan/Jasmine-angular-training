import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', ()=>{
    let component: VoteComponent;
    beforeEach(()=>{
        component = new VoteComponent();
    })
    it('Should increment totalVote when upvoted', ()=>{
        //arrange - initialize the system for the test
        // let component = new VoteComponent();
        //act
        component.upVote();
        //assert
        expect(component.totalVotes).toBe(1);
    });
    it('Should decrement totalVote when upvoted', ()=>{

        component.downVote();

        expect(component.totalVotes).toBe(-1);
    });
})
