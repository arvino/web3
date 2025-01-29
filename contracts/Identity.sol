// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct Profile {
        string name;
        string role;
        uint256 experience;
        string[] skills;
        string[] certifications;
        address owner;
    }

    Profile public profile;
    mapping(address => bool) public verifiers;
    
    event ProfileUpdated(string name, string role, uint256 experience);
    event SkillAdded(string skill);
    event CertificationAdded(string certification);
    event ProjectAdded(string project);
    
    string[] public projects;
    
    modifier onlyOwner() {
        require(msg.sender == profile.owner, "Not authorized");
        _;
    }
    
    modifier onlyVerifier() {
        require(verifiers[msg.sender], "Not a verifier");
        _;
    }
    
    constructor(
        string memory _name,
        string memory _role,
        uint256 _experience
    ) {
        profile.name = _name;
        profile.role = _role;
        profile.experience = _experience;
        profile.owner = msg.sender;
        verifiers[msg.sender] = true;
    }
    
    function updateProfile(
        string memory _name,
        string memory _role,
        uint256 _experience
    ) public onlyOwner {
        profile.name = _name;
        profile.role = _role;
        profile.experience = _experience;
        
        emit ProfileUpdated(_name, _role, _experience);
    }
    
    function addSkill(string memory _skill) public onlyOwner {
        profile.skills.push(_skill);
        emit SkillAdded(_skill);
    }
    
    function addCertification(string memory _certification) public onlyVerifier {
        profile.certifications.push(_certification);
        emit CertificationAdded(_certification);
    }
    
    function addVerifier(address _verifier) public onlyOwner {
        verifiers[_verifier] = true;
    }
    
    function addProject(string memory _project) public onlyOwner {
        projects.push(_project);
        emit ProjectAdded(_project);
    }
    
    function getProfile() public view returns (
        string memory name,
        string memory role,
        uint256 experience,
        string[] memory skills,
        string[] memory certifications,
        string[] memory _projects
    ) {
        return (
            profile.name,
            profile.role,
            profile.experience,
            profile.skills,
            profile.certifications,
            projects
        );
    }
} 