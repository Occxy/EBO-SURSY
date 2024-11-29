<?php
# src/Entity/Animaux.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Animaux
 *
 * @ORM\Table(name="animaux", uniqueConstraints={@ORM\UniqueConstraint(name="NIdent", columns={"NIdent"})}, indexes={@ORM\Index(name="NIdentMother", columns={"NIdentMother"}), @ORM\Index(name="SPCode", columns={"SPCode"})})
 * @ORM\Entity
 */
class Animaux
{
    /**
     * @var string
     *
     * @ORM\Column(name="NIdent", type="string", length=255, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $nident;

    /**
     * @var string
     *
     * @ORM\Column(name="SPCode", type="string", length=3, nullable=true)
     */
    private $spcode;

    /**
     * @var string
     *
     * @ORM\Column(name="Sex", type="string", length=255, nullable=true)
     */
    private $sex;

    /**
     * @var string
     *
     * @ORM\Column(name="Age", type="string", length=255, nullable=true)
     */
    private $age;

    /**
     * @var boolean
     *
     * @ORM\Column(name="Pregnant", type="boolean", nullable=true)
     */
    private $pregnant;

    /**
     * @var string
     *
     * @ORM\Column(name="SexFoetus", type="string", length=255, nullable=true)
     */
    private $sexfoetus;

    /**
     * @var boolean
     *
     * @ORM\Column(name="Lactating", type="boolean", nullable=true)
     */
    private $lactating;

    /**
     * @var boolean
     *
     * @ORM\Column(name="MotherIdentified", type="boolean", nullable=true)
     */
    private $motheridentified;

    /**
     * @var string
     *
     * @ORM\Column(name="NIdentMother", type="string", length=255, nullable=true)
     */
    private $nidentmother;

    /**
     * @var string
     *
     * @ORM\Column(name="SiteName", type="string", length=255, nullable=true)
     */
    private $sitename;

    /**
     * @var boolean
     *
     * @ORM\Column(name="CapturedInCave", type="boolean", nullable=true)
     */
    private $capturedincave;

    /**
     * @var boolean
     *
     * @ORM\Column(name="DeadAnimal", type="boolean", nullable=true)
     */
    private $deadanimal;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="Capture Date", type="datetime", nullable=true)
     */
    private $captureDate;

    /**
     * @var string
     *
     * @ORM\Column(name="GPSXUTM", type="string", length=7, nullable=true)
     */
    private $gpsxutm;

    /**
     * @var string
     *
     * @ORM\Column(name="GPSYUTM", type="string", length=7, nullable=true)
     */
    private $gpsyutm;

    /**
     * @var boolean
     *
     * @ORM\Column(name="BioSamples", type="boolean", nullable=true)
     */
    private $biosamples;

    /**
     * @var boolean
     *
     * @ORM\Column(name="EctoParasite", type="boolean", nullable=true)
     */
    private $ectoparasite;

    /**
     * @var string
     *
     * @ORM\Column(name="ModeCapture", type="string", length=255, nullable=true)
     */
    private $modecapture;

    /**
     * @var boolean
     *
     * @ORM\Column(name="DungCollected", type="boolean", nullable=true)
     */
    private $dungcollected;

    /**
     * @var boolean
     *
     * @ORM\Column(name="BloodSample", type="boolean", nullable=true)
     */
    private $bloodsample;

    /**
     * @var boolean
     *
     * @ORM\Column(name="BloodSpot", type="boolean", nullable=true)
     */
    private $bloodspot;

    /**
     * @var boolean
     *
     * @ORM\Column(name="ThinSmear", type="boolean", nullable=true)
     */
    private $thinsmear;



    /**
     * Get nident
     *
     * @return string
     */
    public function getNident()
    {
        return $this->nident;
    }

    /**
     * Set spcode
     *
     * @param string $spcode
     *
     * @return Animaux
     */
    public function setSpcode($spcode)
    {
        $this->spcode = $spcode;

        return $this;
    }

    /**
     * Get spcode
     *
     * @return string
     */
    public function getSpcode()
    {
        return $this->spcode;
    }

    /**
     * Set sex
     *
     * @param string $sex
     *
     * @return Animaux
     */
    public function setSex($sex)
    {
        $this->sex = $sex;

        return $this;
    }

    /**
     * Get sex
     *
     * @return string
     */
    public function getSex()
    {
        return $this->sex;
    }

    /**
     * Set age
     *
     * @param string $age
     *
     * @return Animaux
     */
    public function setAge($age)
    {
        $this->age = $age;

        return $this;
    }

    /**
     * Get age
     *
     * @return string
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * Set pregnant
     *
     * @param boolean $pregnant
     *
     * @return Animaux
     */
    public function setPregnant($pregnant)
    {
        $this->pregnant = $pregnant;

        return $this;
    }

    /**
     * Get pregnant
     *
     * @return boolean
     */
    public function getPregnant()
    {
        return $this->pregnant;
    }

    /**
     * Set sexfoetus
     *
     * @param string $sexfoetus
     *
     * @return Animaux
     */
    public function setSexfoetus($sexfoetus)
    {
        $this->sexfoetus = $sexfoetus;

        return $this;
    }

    /**
     * Get sexfoetus
     *
     * @return string
     */
    public function getSexfoetus()
    {
        return $this->sexfoetus;
    }

    /**
     * Set lactating
     *
     * @param boolean $lactating
     *
     * @return Animaux
     */
    public function setLactating($lactating)
    {
        $this->lactating = $lactating;

        return $this;
    }

    /**
     * Get lactating
     *
     * @return boolean
     */
    public function getLactating()
    {
        return $this->lactating;
    }

    /**
     * Set motheridentified
     *
     * @param boolean $motheridentified
     *
     * @return Animaux
     */
    public function setMotheridentified($motheridentified)
    {
        $this->motheridentified = $motheridentified;

        return $this;
    }

    /**
     * Get motheridentified
     *
     * @return boolean
     */
    public function getMotheridentified()
    {
        return $this->motheridentified;
    }

    /**
     * Set nidentmother
     *
     * @param string $nidentmother
     *
     * @return Animaux
     */
    public function setNidentmother($nidentmother)
    {
        $this->nidentmother = $nidentmother;

        return $this;
    }

    /**
     * Get nidentmother
     *
     * @return string
     */
    public function getNidentmother()
    {
        return $this->nidentmother;
    }

    /**
     * Set sitename
     *
     * @param string $sitename
     *
     * @return Animaux
     */
    public function setSitename($sitename)
    {
        $this->sitename = $sitename;

        return $this;
    }

    /**
     * Get sitename
     *
     * @return string
     */
    public function getSitename()
    {
        return $this->sitename;
    }

    /**
     * Set capturedincave
     *
     * @param boolean $capturedincave
     *
     * @return Animaux
     */
    public function setCapturedincave($capturedincave)
    {
        $this->capturedincave = $capturedincave;

        return $this;
    }

    /**
     * Get capturedincave
     *
     * @return boolean
     */
    public function getCapturedincave()
    {
        return $this->capturedincave;
    }

    /**
     * Set deadanimal
     *
     * @param boolean $deadanimal
     *
     * @return Animaux
     */
    public function setDeadanimal($deadanimal)
    {
        $this->deadanimal = $deadanimal;

        return $this;
    }

    /**
     * Get deadanimal
     *
     * @return boolean
     */
    public function getDeadanimal()
    {
        return $this->deadanimal;
    }

    /**
     * Set captureDate
     *
     * @param \DateTime $captureDate
     *
     * @return Animaux
     */
    public function setCaptureDate($captureDate)
    {
        $this->captureDate = $captureDate;

        return $this;
    }

    /**
     * Get captureDate
     *
     * @return \DateTime
     */
    public function getCaptureDate()
    {
        return $this->captureDate;
    }

    /**
     * Set gpsxutm
     *
     * @param string $gpsxutm
     *
     * @return Animaux
     */
    public function setGpsxutm($gpsxutm)
    {
        $this->gpsxutm = $gpsxutm;

        return $this;
    }

    /**
     * Get gpsxutm
     *
     * @return string
     */
    public function getGpsxutm()
    {
        return $this->gpsxutm;
    }

    /**
     * Set gpsyutm
     *
     * @param string $gpsyutm
     *
     * @return Animaux
     */
    public function setGpsyutm($gpsyutm)
    {
        $this->gpsyutm = $gpsyutm;

        return $this;
    }

    /**
     * Get gpsyutm
     *
     * @return string
     */
    public function getGpsyutm()
    {
        return $this->gpsyutm;
    }

    /**
     * Set biosamples
     *
     * @param boolean $biosamples
     *
     * @return Animaux
     */
    public function setBiosamples($biosamples)
    {
        $this->biosamples = $biosamples;

        return $this;
    }

    /**
     * Get biosamples
     *
     * @return boolean
     */
    public function getBiosamples()
    {
        return $this->biosamples;
    }

    /**
     * Set ectoparasite
     *
     * @param boolean $ectoparasite
     *
     * @return Animaux
     */
    public function setEctoparasite($ectoparasite)
    {
        $this->ectoparasite = $ectoparasite;

        return $this;
    }

    /**
     * Get ectoparasite
     *
     * @return boolean
     */
    public function getEctoparasite()
    {
        return $this->ectoparasite;
    }

    /**
     * Set modecapture
     *
     * @param string $modecapture
     *
     * @return Animaux
     */
    public function setModecapture($modecapture)
    {
        $this->modecapture = $modecapture;

        return $this;
    }

    /**
     * Get modecapture
     *
     * @return string
     */
    public function getModecapture()
    {
        return $this->modecapture;
    }

    /**
     * Set dungcollected
     *
     * @param boolean $dungcollected
     *
     * @return Animaux
     */
    public function setDungcollected($dungcollected)
    {
        $this->dungcollected = $dungcollected;

        return $this;
    }

    /**
     * Get dungcollected
     *
     * @return boolean
     */
    public function getDungcollected()
    {
        return $this->dungcollected;
    }

    /**
     * Set bloodsample
     *
     * @param boolean $bloodsample
     *
     * @return Animaux
     */
    public function setBloodsample($bloodsample)
    {
        $this->bloodsample = $bloodsample;

        return $this;
    }

    /**
     * Get bloodsample
     *
     * @return boolean
     */
    public function getBloodsample()
    {
        return $this->bloodsample;
    }

    /**
     * Set bloodspot
     *
     * @param boolean $bloodspot
     *
     * @return Animaux
     */
    public function setBloodspot($bloodspot)
    {
        $this->bloodspot = $bloodspot;

        return $this;
    }

    /**
     * Get bloodspot
     *
     * @return boolean
     */
    public function getBloodspot()
    {
        return $this->bloodspot;
    }

    /**
     * Set thinsmear
     *
     * @param boolean $thinsmear
     *
     * @return Animaux
     */
    public function setThinsmear($thinsmear)
    {
        $this->thinsmear = $thinsmear;

        return $this;
    }

    /**
     * Get thinsmear
     *
     * @return boolean
     */
    public function getThinsmear()
    {
        return $this->thinsmear;
    }
}
