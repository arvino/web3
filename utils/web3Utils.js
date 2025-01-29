import { ethers } from 'ethers';

export async function getProfile(contract) {
  try {
    const profile = await contract.getProfile();
    return {
      name: profile.name,
      role: profile.role,
      experience: profile.experience.toNumber(),
      skills: profile.skills,
      certifications: profile.certifications
    };
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export async function updateProfile(contract, name, role, experience) {
  try {
    const tx = await contract.updateProfile(name, role, experience);
    await tx.wait();
    return true;
  } catch (error) {
    console.error('Error updating profile:', error);
    return false;
  }
}

export async function addSkill(contract, skill) {
  try {
    const tx = await contract.addSkill(skill);
    await tx.wait();
    return true;
  } catch (error) {
    console.error('Error adding skill:', error);
    return false;
  }
}

export async function addCertification(contract, certification) {
  try {
    const tx = await contract.addCertification(certification);
    await tx.wait();
    return true;
  } catch (error) {
    console.error('Error adding certification:', error);
    return false;
  }
}

export async function addProject(contract, project) {
  try {
    const tx = await contract.addProject(project);
    await tx.wait();
    return true;
  } catch (error) {
    console.error('Error adding project:', error);
    return false;
  }
} 