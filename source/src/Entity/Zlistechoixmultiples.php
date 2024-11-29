<?php
# src/Entity/Zlistechoixmultiples.php

namespace Tuto\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Zlistechoixmultiples
 *
 * @ORM\Table(name="zlistechoixmultiples")
 * @ORM\Entity
 */
class Zlistechoixmultiples
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

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
     * @var string
     *
     * @ORM\Column(name="UICNStatus", type="string", length=255, nullable=true)
     */
    private $uicnstatus;

    /**
     * @var string
     *
     * @ORM\Column(name="Country", type="string", length=255, nullable=true)
     */
    private $country;

    /**
     * @var string
     *
     * @ORM\Column(name="Province", type="string", length=255, nullable=true)
     */
    private $province;

    /**
     * @var string
     *
     * @ORM\Column(name="SiteDescription", type="string", length=255, nullable=true)
     */
    private $sitedescription;

    /**
     * @var string
     *
     * @ORM\Column(name="ModeCollecte", type="string", length=255, nullable=true)
     */
    private $modecollecte;

    /**
     * @var string
     *
     * @ORM\Column(name="ModeCapture", type="string", length=255, nullable=true)
     */
    private $modecapture;

    /**
     * @var string
     *
     * @ORM\Column(name="PCR", type="string", length=255, nullable=true)
     */
    private $pcr;

    /**
     * @var string
     *
     * @ORM\Column(name="Organ", type="string", length=255, nullable=true)
     */
    private $organ;

    /**
     * @var string
     *
     * @ORM\Column(name="VirusFamily", type="string", length=255, nullable=true)
     */
    private $virusfamily;

    /**
     * @var string
     *
     * @ORM\Column(name="MammalsOrder", type="string", length=255, nullable=true)
     */
    private $mammalsorder;

    /**
     * @var string
     *
     * @ORM\Column(name="MammalsFamily", type="string", length=255, nullable=true)
     */
    private $mammalsfamily;

    /**
     * @var string
     *
     * @ORM\Column(name="Diet", type="string", length=255, nullable=true)
     */
    private $diet;

    /**
     * @var string
     *
     * @ORM\Column(name="EyesSize", type="string", length=255, nullable=true)
     */
    private $eyessize;

    /**
     * @var string
     *
     * @ORM\Column(name="BackLegShape", type="string", length=255, nullable=true)
     */
    private $backlegshape;

    /**
     * @var string
     *
     * @ORM\Column(name="EarsShape", type="string", length=255, nullable=true)
     */
    private $earsshape;

    /**
     * @var string
     *
     * @ORM\Column(name="DorsalPelageAspect", type="string", length=255, nullable=true)
     */
    private $dorsalpelageaspect;

    /**
     * @var string
     *
     * @ORM\Column(name="DorsalPelageCor", type="string", length=255, nullable=true)
     */
    private $dorsalpelagecor;

    /**
     * @var string
     *
     * @ORM\Column(name="LimitPelage", type="string", length=255, nullable=true)
     */
    private $limitpelage;

    /**
     * @var string
     *
     * @ORM\Column(name="VentralPelage", type="string", length=255, nullable=true)
     */
    private $ventralpelage;

    /**
     * @var string
     *
     * @ORM\Column(name="TailShape", type="string", length=255, nullable=true)
     */
    private $tailshape;

    /**
     * @var string
     *
     * @ORM\Column(name="CapturePlace", type="string", length=255, nullable=true)
     */
    private $captureplace;

    /**
     * @var string
     *
     * @ORM\Column(name="TestResults", type="string", length=255, nullable=true)
     */
    private $testresults;



    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set sex
     *
     * @param string $sex
     *
     * @return Zlistechoixmultiples
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
     * @return Zlistechoixmultiples
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
     * Set uicnstatus
     *
     * @param string $uicnstatus
     *
     * @return Zlistechoixmultiples
     */
    public function setUicnstatus($uicnstatus)
    {
        $this->uicnstatus = $uicnstatus;

        return $this;
    }

    /**
     * Get uicnstatus
     *
     * @return string
     */
    public function getUicnstatus()
    {
        return $this->uicnstatus;
    }

    /**
     * Set country
     *
     * @param string $country
     *
     * @return Zlistechoixmultiples
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set province
     *
     * @param string $province
     *
     * @return Zlistechoixmultiples
     */
    public function setProvince($province)
    {
        $this->province = $province;

        return $this;
    }

    /**
     * Get province
     *
     * @return string
     */
    public function getProvince()
    {
        return $this->province;
    }

    /**
     * Set sitedescription
     *
     * @param string $sitedescription
     *
     * @return Zlistechoixmultiples
     */
    public function setSitedescription($sitedescription)
    {
        $this->sitedescription = $sitedescription;

        return $this;
    }

    /**
     * Get sitedescription
     *
     * @return string
     */
    public function getSitedescription()
    {
        return $this->sitedescription;
    }

    /**
     * Set modecollecte
     *
     * @param string $modecollecte
     *
     * @return Zlistechoixmultiples
     */
    public function setModecollecte($modecollecte)
    {
        $this->modecollecte = $modecollecte;

        return $this;
    }

    /**
     * Get modecollecte
     *
     * @return string
     */
    public function getModecollecte()
    {
        return $this->modecollecte;
    }

    /**
     * Set modecapture
     *
     * @param string $modecapture
     *
     * @return Zlistechoixmultiples
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
     * Set pcr
     *
     * @param string $pcr
     *
     * @return Zlistechoixmultiples
     */
    public function setPcr($pcr)
    {
        $this->pcr = $pcr;

        return $this;
    }

    /**
     * Get pcr
     *
     * @return string
     */
    public function getPcr()
    {
        return $this->pcr;
    }

    /**
     * Set organ
     *
     * @param string $organ
     *
     * @return Zlistechoixmultiples
     */
    public function setOrgan($organ)
    {
        $this->organ = $organ;

        return $this;
    }

    /**
     * Get organ
     *
     * @return string
     */
    public function getOrgan()
    {
        return $this->organ;
    }

    /**
     * Set virusfamily
     *
     * @param string $virusfamily
     *
     * @return Zlistechoixmultiples
     */
    public function setVirusfamily($virusfamily)
    {
        $this->virusfamily = $virusfamily;

        return $this;
    }

    /**
     * Get virusfamily
     *
     * @return string
     */
    public function getVirusfamily()
    {
        return $this->virusfamily;
    }

    /**
     * Set mammalsorder
     *
     * @param string $mammalsorder
     *
     * @return Zlistechoixmultiples
     */
    public function setMammalsorder($mammalsorder)
    {
        $this->mammalsorder = $mammalsorder;

        return $this;
    }

    /**
     * Get mammalsorder
     *
     * @return string
     */
    public function getMammalsorder()
    {
        return $this->mammalsorder;
    }

    /**
     * Set mammalsfamily
     *
     * @param string $mammalsfamily
     *
     * @return Zlistechoixmultiples
     */
    public function setMammalsfamily($mammalsfamily)
    {
        $this->mammalsfamily = $mammalsfamily;

        return $this;
    }

    /**
     * Get mammalsfamily
     *
     * @return string
     */
    public function getMammalsfamily()
    {
        return $this->mammalsfamily;
    }

    /**
     * Set diet
     *
     * @param string $diet
     *
     * @return Zlistechoixmultiples
     */
    public function setDiet($diet)
    {
        $this->diet = $diet;

        return $this;
    }

    /**
     * Get diet
     *
     * @return string
     */
    public function getDiet()
    {
        return $this->diet;
    }

    /**
     * Set eyessize
     *
     * @param string $eyessize
     *
     * @return Zlistechoixmultiples
     */
    public function setEyessize($eyessize)
    {
        $this->eyessize = $eyessize;

        return $this;
    }

    /**
     * Get eyessize
     *
     * @return string
     */
    public function getEyessize()
    {
        return $this->eyessize;
    }

    /**
     * Set backlegshape
     *
     * @param string $backlegshape
     *
     * @return Zlistechoixmultiples
     */
    public function setBacklegshape($backlegshape)
    {
        $this->backlegshape = $backlegshape;

        return $this;
    }

    /**
     * Get backlegshape
     *
     * @return string
     */
    public function getBacklegshape()
    {
        return $this->backlegshape;
    }

    /**
     * Set earsshape
     *
     * @param string $earsshape
     *
     * @return Zlistechoixmultiples
     */
    public function setEarsshape($earsshape)
    {
        $this->earsshape = $earsshape;

        return $this;
    }

    /**
     * Get earsshape
     *
     * @return string
     */
    public function getEarsshape()
    {
        return $this->earsshape;
    }

    /**
     * Set dorsalpelageaspect
     *
     * @param string $dorsalpelageaspect
     *
     * @return Zlistechoixmultiples
     */
    public function setDorsalpelageaspect($dorsalpelageaspect)
    {
        $this->dorsalpelageaspect = $dorsalpelageaspect;

        return $this;
    }

    /**
     * Get dorsalpelageaspect
     *
     * @return string
     */
    public function getDorsalpelageaspect()
    {
        return $this->dorsalpelageaspect;
    }

    /**
     * Set dorsalpelagecor
     *
     * @param string $dorsalpelagecor
     *
     * @return Zlistechoixmultiples
     */
    public function setDorsalpelagecor($dorsalpelagecor)
    {
        $this->dorsalpelagecor = $dorsalpelagecor;

        return $this;
    }

    /**
     * Get dorsalpelagecor
     *
     * @return string
     */
    public function getDorsalpelagecor()
    {
        return $this->dorsalpelagecor;
    }

    /**
     * Set limitpelage
     *
     * @param string $limitpelage
     *
     * @return Zlistechoixmultiples
     */
    public function setLimitpelage($limitpelage)
    {
        $this->limitpelage = $limitpelage;

        return $this;
    }

    /**
     * Get limitpelage
     *
     * @return string
     */
    public function getLimitpelage()
    {
        return $this->limitpelage;
    }

    /**
     * Set ventralpelage
     *
     * @param string $ventralpelage
     *
     * @return Zlistechoixmultiples
     */
    public function setVentralpelage($ventralpelage)
    {
        $this->ventralpelage = $ventralpelage;

        return $this;
    }

    /**
     * Get ventralpelage
     *
     * @return string
     */
    public function getVentralpelage()
    {
        return $this->ventralpelage;
    }

    /**
     * Set tailshape
     *
     * @param string $tailshape
     *
     * @return Zlistechoixmultiples
     */
    public function setTailshape($tailshape)
    {
        $this->tailshape = $tailshape;

        return $this;
    }

    /**
     * Get tailshape
     *
     * @return string
     */
    public function getTailshape()
    {
        return $this->tailshape;
    }

    /**
     * Set captureplace
     *
     * @param string $captureplace
     *
     * @return Zlistechoixmultiples
     */
    public function setCaptureplace($captureplace)
    {
        $this->captureplace = $captureplace;

        return $this;
    }

    /**
     * Get captureplace
     *
     * @return string
     */
    public function getCaptureplace()
    {
        return $this->captureplace;
    }

    /**
     * Set testresults
     *
     * @param string $testresults
     *
     * @return Zlistechoixmultiples
     */
    public function setTestresults($testresults)
    {
        $this->testresults = $testresults;

        return $this;
    }

    /**
     * Get testresults
     *
     * @return string
     */
    public function getTestresults()
    {
        return $this->testresults;
    }
}
